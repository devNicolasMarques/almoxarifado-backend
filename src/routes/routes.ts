import { Express } from 'express';
import teacher from './teacher.ts'
import manager from './manager.ts'
import auth from './auth.ts'
import classroom from './classroom.ts'
import express from 'express'
import className from './className.ts'
import reservation from './reservation.ts'

export default function (app: Express) {
    app
        .use(express.json())
        .use('/api/teacher', teacher)
        .use('/api/manager', manager)
        .use('/api/auth', auth)
        .use('/api/class', className)
        .use('/api/reservation', reservation)
        .use('/api/classroom', classroom)
}