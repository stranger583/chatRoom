export interface I_yourReply {
    replyID:string,
    replyText:string
}

export  interface I_userData {
    displayName: string,
    email: string,
    accessToken:string,
    uid: string,
    authAvator:string,
}

export interface I_reatedAt{
    nanoseconds:number;
    seconds:number;
}

export interface I_Messenger {
    text:string;
    send:string;
    isShow:boolean;
    id:string;
    createdAt:I_reatedAt;
    reply:I_yourReply;
}

export interface I_MessengerList {
    userData:I_userData;
    handleChangeRoomInfo:(userData:I_userData) => void;
}
