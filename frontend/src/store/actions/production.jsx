import * as actionTypes from "./actionTypes";
import axios from "axios";
import { logout } from "./users";

const produce = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

produce.interceptors.request.use(config => {
  const reqConfig = config;
  const token = localStorage.getItem("jwt");
  reqConfig.headers.Authorization = token ? `JWT ${token}` : "";
  return config;
});

export const setProduction = productions => {
  return {
    type: actionTypes.SET_PRODUCTION,
    productions
  };
};

export const setDetailProduction = detailData => {
  return {
    type: actionTypes.SET_DETAIL_PRODUCTION,
    detailData
  };
};

export const doLikeProduction = productionId => {
  return {
    type: actionTypes.LIKE_PRODUCTION,
    productionId
  };
};

export const doUnLikeProduction = productionId => {
  return {
    type: actionTypes.UNLIKE_PRODUCTION,
    productionId
  };
};

export const addComment = (productionId, message) => {
  return {
    type: actionTypes.ADD_COMMENT,
    productionId,
    message
  };
};

export const deleteComment = commentId => {
  return {
    type: actionTypes.DELETE_COMMENT,
    commentId
  };
};

export const setUserList = userList => {
  return {
    type: actionTypes.SET_USER_LIST,
    userList
  };
};

export const getProduction = () => {
  return dispatch => {
    produce
      .get("production/")
      .then(response => {
        const { data } = response;
        dispatch(setProduction(data));
      })
      .catch(error => {
        if (error.response) {
          const { status } = error.response;

          switch (status) {
            case 401:
              dispatch(logout());
              break;
            default:
              break;
          }
        }
      });
  };
};

export const getDetailProduction = productionId => {
  return dispatch => {
    produce
      .get(`production/${productionId}/`)
      .then(response => {
        const { data } = response;
        dispatch(setDetailProduction(data));
      })
      .catch(error => {
        if (error.response) {
          const { status } = error.response;

          switch (status) {
            case 401:
              dispatch(logout());
              break;
            default:
              break;
          }
        }
      });
  };
};

export const likeProduction = productionId => {
  return dispatch => {
    produce
      .post(`production/${productionId}/likes/`)
      .then(response => {
        dispatch(doLikeProduction(productionId));
      })
      .catch(error => {
        if (error.response) {
          const { status } = error.response;

          switch (status) {
            case 401:
              dispatch(logout());
              break;
            default:
              break;
          }
        }
      });
  };
};

export const unlikeProduction = productionId => {
  return dispatch => {
    produce
      .delete(`production/${productionId}/unlikes/`)
      .then(response => {
        dispatch(doUnLikeProduction(productionId));
      })
      .catch(error => {
        if (error.response) {
          const { status } = error.response;

          switch (status) {
            case 401:
              dispatch(logout());
              break;
            default:
              break;
          }
        }
      });
  };
};

export const commentProduction = (productionId, message) => {
  return dispatch => {
    produce
      .post(`production/${productionId}/comments/`, { message })
      .then(response => {
        const { data } = response;
        dispatch(addComment(productionId, data));
      })
      .catch(error => {
        if (error.response) {
          const { status } = error.response;

          switch (status) {
            case 401:
              dispatch(logout());
              break;
            default:
              break;
          }
        }
      });
  };
};

export const commentDelete = commentId => {
  return dispatch => {
    produce
      .delete(`production/comments/${commentId}/`)
      .then(response => {
        const { status } = response;

        if (status === 204) {
          dispatch(deleteComment(commentId));
        }
      })
      .catch(error => {
        if (error.response) {
          const { status } = error.response;

          switch (status) {
            case 401:
              dispatch(logout());
              break;
            default:
              break;
          }
        }
      });
  };
};

export const getProductionLikes = productionId => {
  return dispatch => {
    produce
      .get(`production/${productionId}/likes/`)
      .then(response => {
        const { data } = response;
        dispatch(setUserList(data));
      })
      .catch(error => {
        if (error.response) {
          const { status } = error.response;

          switch (status) {
            case 401:
              dispatch(logout());
              break;
            default:
              break;
          }
        }
      });
  };
};
