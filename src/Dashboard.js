import React from 'react'
import TodoTable from './widgets/Todo/TodoTable'
import WeatherView from './widgets/Weather/WeatherView'

export default function Dashboard() {
    return (
        <>
            <div className="container-xxl">
                <div className="row">
                    <div className='col'>
                        <WeatherView />
                    </div>
                    <div className='col'>
                        <h1 className='text-lg-center'>Dashboard</h1>
                    </div>
                </div>
            </div>
            <h1>Todo List</h1>
            <TodoTable />

        </>
    )
}
