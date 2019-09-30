import React from 'react'
import Footer from './Footer'
import Menu from './Menu'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = ({ match: { params } }) => {
    return (
        <div>
            <Menu />
            <AddTodo />
            <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
            <Footer />
        </div>
    )
}

export default App