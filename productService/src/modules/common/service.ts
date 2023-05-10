import { Response } from "express";
import { response_status_code } from "./model";

export function successResponse(message: string, DATA: any, res: Response){
    res.status(response_status_code.success).json({
        STATUS: 'SUCCESS',
        MESSAGE: message,
        DATA
    })
}


export function failureResponse(message: string, DATA: any, res: Response){
    res.status(response_status_code.success).json({
        STATUS: 'FILURE',
        MESSAGE: message,
        DATA
    })
}


export function insufficientParameters(res: Response){
    res.status(response_status_code.bad_request).json({
        STATUS: 'FILURE',
        MESSAGE: 'Insufficient parameter',
        DATA: {}
    })
}


export function mongoError(err: any, res: Response){
    res.status(response_status_code.internal_server_error).json({
        STATUS: 'FILURE',
        MESSAGE: 'MongoDB error',
        DATA: err
    })
}