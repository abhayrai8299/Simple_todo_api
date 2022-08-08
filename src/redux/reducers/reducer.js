const initialState = {
  todos: [],
  users:[],
  loader1:false,
  loader2:false,
  delload1:false,
  delload2:false,
};

export const Todoreducer = (state = initialState, action) => {
  switch (action.type) {
    case "loadBool1":
      console.log(action.payload);
      return {
        ...state,
        loader1:action.tru,
      }
      case "loadBool2":
      return {
        ...state,
        loader2:action.tru,
      }
      case "loadDel1":
        return {
          ...state,
          delload1:action.tru,
        }
        case "loadDel2":
          return {
            ...state,
            delload2:action.tru,
          }
    case "SetDataTodo":
      return {
        ...state,
        todos: action.payload,
      };
      case "SetDataUser":
        return {
          ...state,
          users: action.payload,
        };
      case "fetchapiTodo":
        return {
          ...state,
          todos:action.payload
        }
        case "fetchapiUser":
        return {
          ...state,
          users:action.payload
        }
        case "postaddTodo":
          return {
            ...state,
            todos:[...state.todos,{...action.payload}],
            loader1:action.flag,
          }
          case "postaddUser":
            return {
              ...state,
              users:[...state.users,{...action.payload}],
              loader2:action.flag,
            }
        case "updateApiTodo":
        return {
          ...state,
          todos: state.todos.map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, taskName: action.payload.taskName };
            }
            return item;
          }),
          loader1:action.flag,
        }
        case "updateApiUser":
          return {
            ...state,
            users: state.users.map((item) => {
              if (item.id === action.payload.id) {
                return { ...item, name: action.payload.name };
              }
              return item;
            }),
            loader2:action.flag,
          }
        case "postDeleteTodo":
        return {
          ...state,
          todos:state.todos.filter((item) => item.id !== action.payload),
          delload1:action.flag,
        }
        case "postDeleteUser":
          const element = state.users.filter((item) => item.id !== action.payload);
        return {
          ...state,
          users:element,
          delload2:action.flag,
        }
    default:
      return state;
  }
};
