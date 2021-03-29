import firebase from "../../firebase"
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK="DELETE_TASK"
export const GET_ALL_TASKS="GET_ALL_TASKS"

var db=firebase.firestore()


export const getAllTasks=()=>{
  return async(dispatch)=>{
    var uid=firebase.auth().currentUser.uid
    db.collection("tasks").doc(uid).get().then(doc=>{
        dispatch({type:GET_ALL_TASKS,payload:doc.data().tasks})
    })
 
  
  }
}

export const addTask = (task) => {
  return async (dispatch) => {
    var uid=firebase.auth().currentUser.uid
    var dbRef=db.collection("tasks").doc(uid)
    dbRef.update({
      tasks:firebase.firestore.FieldValue.arrayUnion(task)
    })
    dispatch({ type: ADD_TASK, payload: { task: task } });
  };
};


export const deleteTask=(index,task)=>{
  return async(dispatch)=>{
    var uid=firebase.auth().currentUser.uid
    var dbRef=db.collection("tasks").doc(uid)
    dbRef.update({
      tasks:firebase.firestore.FieldValue.arrayRemove(task)
    })
    dispatch({type:DELETE_TASK,payload:{index:index}})
  }
}