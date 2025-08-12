
import { prisma } from '../lib/prisma.ts';
import { teacherDTO } from '../dtos/teacherDto.ts';
import { LoginDTO, RegisterDTO } from '../dtos/authDto.ts';

import CryptoJS from 'crypto-js'
import 'dotenv/config'
import jwt from 'jsonwebtoken'

export class AuthService {

   async register(data: RegisterDTO) {
    const { username, position, password }: RegisterDTO = data;

    const userExist = await prisma.user.findUnique({
        where: { username }
    });

    if (userExist) {
        throw new Error("Usuário já existe");
    }

    const passwordCrypt = CryptoJS.AES.encrypt(password, process.env.SECRET as string).toString();

    console.log(passwordCrypt)

    return await prisma.user.create({
        data: {
            username,
            position,
            password: passwordCrypt,
        }
    });
}

    async login(data: LoginDTO) {

        const { username, password } = data;

        const user = await prisma.user.findUnique(
            {
                where: {
                    username: username
                },
                select: {
                    id: true,
                    username: true,
                    password: true
                }
            }
        );
        if (user) {
            var bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET as string);
            const passwordDecrypted = bytes.toString(CryptoJS.enc.Utf8);

            if (password !== passwordDecrypted) {
                throw new Error('Usuário e/ou senha inválido ');
            }

            const secret = process.env.SECRET

            const token = jwt.sign(
                {
                    id: user.id
                },
                secret as string,
                {
                    expiresIn: '2 days'
                }
            );

            return { token: token };
        }
        else{
            throw new Error('Usuário inexistente');
        }
    }

}