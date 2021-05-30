export const READ_MEMOS = "READ_MEMOS"
export const ADD_MEMO = "ADD_MEMO"
export const GET_MEMO = "GET_MEMO"
// export const UPDATE_MEMO = "UPDATE_MEMO"
// export const DELETE_MEMO = "DELETE_MEMO"

// ******** memoIndexで使う。
// get memo lists
export const getMemos = () => ({
    type: READ_MEMOS,
})

// ******** memoNewで使う。
// メモを追加するとき、titleとmemoに値を記入した後送信するため、引数を持たせておく(value)。
export const addMemo = (values) => ({
    type: ADD_MEMO,
    params: values,

    // id : nextId++,   
    // title: values.title,     titleが定義されてないって
    // memo: values.memo,
})

// ******** memoShowでつかう。　
export const getMemo = (values) => ({
    type: GET_MEMO,
    params: values,
})




