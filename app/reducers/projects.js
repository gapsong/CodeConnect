export default function messages(state = {}, action) {
    switch (action.type) {
        case 'GET_REPOS':
            console.log("get repo reducer activated");
            console.log(action.repos);

            return Object.assign({}, state, {
                repos: action.repos.filter((item) =>
                    state.ccrepos.reduce(function(acc, item2) {
                        return acc && (JSON.stringify(item) !== JSON.stringify(item2))
                    }, true)
                )
            })
            break;
        case 'ADD_PROJECT_TO_CC':
            console.log("states")
            console.log(state);
            //state is state.projects
            return Object.assign({}, state, {
                repos: state.repos.filter((item) => item.name !== action.project.name),
                ccrepos: [...state.ccrepos, action.project]
            })
            break;

        default:
            return state;
    }
}
