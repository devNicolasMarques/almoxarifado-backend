import { Express } from 'express';
import teacher from '../src/routes/teacher.ts'
import manager from '../src/routes/manager.ts'
import auth from '../src/routes/auth.ts'
import classroom from '../src/routes/classroom.ts'
import express from 'express'

export default function (app: Express) {
    app
        .use(express.json())
        .use('/api/teacher', teacher)
        .use('/api/manager', manager)
        .use('/api/auth', auth)
        .use('/api/classroom', classroom)
}