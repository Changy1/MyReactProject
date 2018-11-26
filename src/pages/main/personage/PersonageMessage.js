import React, { Component } from 'react'
import { MessageForPersonage } from './PersonageStyle'

class PersonageMessage extends Component {
    render () {
        return (
            <MessageForPersonage>
                <div className = 'person-img'>
                    <img alt = '' src = 'https://face1.juancdn.com/face/150101/0/0/default_204x204.jpg?iopcmd=thumbnail&type=11&height=80&width=80%7Ciopcmd=convert&Q=88&dst=jpg' />
                </div>
                <div className = 'person-text'>
                    <p>jp_9589edaa6</p>
                    <span>我的账户<i></i></span>
                </div>
            </MessageForPersonage>
        )
    }
}

export default PersonageMessage