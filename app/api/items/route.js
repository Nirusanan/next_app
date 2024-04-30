export async function GET(){
    return Response.json([
        {id: 1, name: 'fetching'},
        {id: 2, name: 'routing'},
        {id: 3, name: 'rendering'},

    ])
}


export async function POST(){
    return Response.json({ message: 'POST is success'})
}