import { createSelector } from 'reselect'

const getModals = (state, props) => state.modals

export const makeGetModals = () => {
  return createSelector(
    getModals,
    Modals => {
          return Modals
    }
  )
}


// export const getVisibleModals = createSelector(
//   [ getVisibilityFilter, getModals ],
//   (visibilityFilter, Modals) => {
//     switch (visibilityFilter) {
//       case 'SHOW_ALL':
//         return Modals;
//       case 'SHOW_COMPLETED':
//         return Modals.filter(t => t.completed);
//       case 'SHOW_ACTIVE':
//         return Modals.filter(t => !t.completed);
//       default:
//         return Modals;  
//     }
//   }
// )
