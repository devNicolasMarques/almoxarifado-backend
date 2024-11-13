export interface registerClassroomDTO {
    classroom: string;
    capacity: number;
    floor: number;
}

export interface updateClassroomDTO {
    id: number,
    classroom: string;
    capacity: number;
    floor: number;
}


export interface DeleteClassroomDTO{
    classroom: string
}