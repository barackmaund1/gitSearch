export class User {
    static result:any;
    constructor( 
        public name:string,
        public user_url:string,
        public repo_num:number,
        public overview:number,
        public projects:number,
        public followers:number,
        public following:number,
        public avatar_url:string,
        public updated:Date )
        {
 }
}