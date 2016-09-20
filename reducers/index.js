import { combineReducers } from 'redux'
import * as ActionsTypes from '../constants/ActionTypes'

function selectTag (state = 'all', action){
    switch ( action.type ){
        case ActionsTypes.SELECTED_TAG:
            return action.tag
        default:
            return state
    }
}

function topicsByTag(state = {
    isFetching: false,
    items: []
}, action){
    switch (action.type){
        case ActionsTypes.REQURST_TOPICS:
            return Object.assign({}, state, {
                isFetching: true
            })
        case ActionsTypes.RECEIVE_TOPICS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.topics
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    selectTag,
    topicsByTag
})

export default rootReducer
