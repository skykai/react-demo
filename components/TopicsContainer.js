/**
 * Created by huangkai.wang on 16/5/17.
 */
import React, { Component, PropTypes } from 'react'
import TopicsItem from './TopicsItem'
import TopicsHeader from './TopicsHeader'

class TopicsContainer extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        const { tag, topics ,onClick} = this.props

        return (
            <div>
                <TopicsHeader tag={tag} onClick={onClick}/>
                <div className="topic-list">
                    {topics.isFetching
                        ? <h2>Loading...</h2>
                        : topics.items.map(topic =>
                            <TopicsItem topic={topic} key={topic.id}/>
                        )
                    }
                </div>
            </div>
        )
    }
}

TopicsContainer.propTypes = {
    tag: PropTypes.string.isRequired,
    topics: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}

export default TopicsContainer