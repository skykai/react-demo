/**
 * Created by huangkai.wang on 16/5/18.
 */

import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import { TOPIC_TAGS } from '../constants/TagFilters'


class TopicsHeader extends Component {
    render() {
        const { tag, onClick } = this.props

        return (
            <header className="header">
                {
                    Object.keys(TOPIC_TAGS).map(key =>
                        <a className={classnames({
                            'topic-tab' : true,
                            'current-tab' : key === tag
                            })}
                            key={key}
                            onClick={e => {
                                e.preventDefault()
                                onClick(key)}
                            }
                            >
                            {TOPIC_TAGS[key]}
                        </a>
                    )
                }
            </header>
        )
    }
}

TopicsHeader.propTypes = {
    tag: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default TopicsHeader