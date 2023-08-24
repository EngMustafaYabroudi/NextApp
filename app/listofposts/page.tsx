import Image from "next/image";
const getPostData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
}
const getUserData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
}
const getDogData = async()=>{
    const res = await fetch("https://dog.ceo/api/breeds/image/random",{
        next :{
            revalidate : 10,
        },
    });
    return res.json();

}
export default async function ListOfPostes() {
    const [Posts, Users ,dog] = await Promise.all([
        getPostData(),
         getUserData(),
         getDogData()
        ]);
    return (
        <div>
            <Image src={dog.message} alt ="dog" width={500} height={500}/> 
            {Posts.map((post: any) => {
                return <p>{post.title}</p>;
            })}
            <div>
                {
                    Users.map((user:any)=>{
                        return <p>name : {user.name}</p>
                    })
                }
            </div>
        </div>
    )

}