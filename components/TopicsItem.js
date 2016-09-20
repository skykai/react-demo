/**
 * Created by huangkai.wang on 16/5/17.
 */

import React, { Component, PropTypes } from 'react'
import { TOPIC_TAGS } from '../constants/TagFilters'

export default class TopicsItem extends Component {

    renderTab(top, tab) {
        if(top) {
            return (
                <span className="put_top">【置顶】</span>
            )
        }else {
            return (
                <span className="topiclist-tab">【{TOPIC_TAGS[tab]}】</span>
            )
        }
    }

    render() {
        const { author, id, last_reply_at, title, top, tab} = this.props.topic

        return (
            <div className="cell">
                <div className="last_time pull-right">
                    <span className="last_active_time">{new Date(last_reply_at).toLocaleString()}</span>
                    <span> by </span>
                    <a className="last_time pull-right" target="_blank" href={"https://cnodejs.org/user/" + author.loginname}>({author.loginname})</a>
                </div>


                <div className="topic_title_wrapper">
                    {this.renderTab(top, tab)}
                    <a className="topic_title" target="_blank" href={"https://cnodejs.org/topic/" + id} title={title}>
                        {title}
                    </a>
                </div>
            </div>
        )
    }
}

TopicsItem.propTypes = {
    topic: PropTypes.object.isRequired
}