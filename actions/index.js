/**
 * Created by huangkai.wang on 16/5/17.
 */
import fetch from 'isomorphic-fetch'
import * as ActionsTypes from '../constants/ActionTypes'

export function changeTag(tag) {
    return {
        type: ActionsTypes.SELECTED_TAG,
        tag
    }
}

function requestTopics() {
    return {
        type: ActionsTypes.REQURST_TOPICS
    }
}

function receiveTopics(json) {
    return {
        type: ActionsTypes.RECEIVE_TOPICS,
        topics: json.data
    }
}

export function fetchTopics(tag) {
    return dispatch => {
        dispatch(requestTopics())
        return fetch(`https://cnodejs.org/api/v1/topics?tab=${tag}`)
            .then(response => response.json())
            .then(json => dispatch(receiveTopics(json)))
    }
}