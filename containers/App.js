import React, {Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as ActionTypes from '../constants/ActionTypes'
import { changeTag, fetchTopics } from '../actions'
import TopicsContainer from '../components/TopicsContainer'

class App extends Component {
    constructor(props){
        super(props)
        this.handleTagChange = this.handleTagChange.bind(this)
    }
    componentsDidMount(){
        const { tag, dispatch } = this.props
        dispatch(fetchTopics(tag))
    }
    componentWillReceiveProps(nextProps){
        //
    }
    handleTagChange(nextTag){
        this.props.dispatch(changeTag(nextTag))
        this.props.dispatch(fetchTopics(nextTag))
    }
    render(){
        const { tag, topics, actions } = this.props
        return (
            <TopicsContainer
                tag = {tag}
                topics = {topics}
                actions = {actions}
                onClick = {this.handleTagChange} />
        )
    }
}

App.propTypes = {
    topics: PropTypes.object.isRequired,
    tag: PropTypes.string.isRequired
}

function mapStateToProps(state){
    const { selectTag, topicsByTag } = state
    return {
        tag: selectTag,
        topics: topicsByTag
    }
}

export default connect(mapStateToProps)(App)
