
const users = [
    {id: 1, name: 'David'},
    {id: 2, name: 'Tom'}
]
//GET api/users
export async function GET() {
    /**
     * Ở đây bạn có thể liên kết trực tiếp với Database
     * Hoặc có thể gọi API ở đây để lấy data
     *  */
   
//GET All
    return Response.json(users)
}

//POST api/users

export async function POST(request: Request) {
    const body = await request.json();
    return Response.json(body)
}


