import React, { useEffect, useState } from 'react'

const ShowInfo = () => {
    const [info, setInfo] = useState([])

    const getUser = async() => {
        let user = await fetch("http://localhost:3000/user").then(res => res.json())
        let tasks = user.tasks
        tasks.map(async (task) => {
            const getTask = await fetch(`http://localhost:3000/task/${task}`).then(res => res.json())
            setInfo(prevState => [...prevState, {title: getTask.title, tags: getTask.tags}])
        })
    }

    useEffect(() => {
        getUser()
    }, [])


    useEffect(() => {
        console.log(info);
    }, [info])


    return (
        <div>
            {info.map((task) => { return (
                    <>
                        <h2>{task.title}</h2>
                        {task.tags.map((tag) => <p>tag: {tag}</p>)}
                    </>
                )
            })}   
        </div>
    )
}

export default ShowInfo;
