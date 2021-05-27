import {
    READ_MEMOS,
    // READ_MEMO,
    ADD_MEMO,
    // UPDATE_MEMO,
    // DELETE_MEMO,
} from '../actions'

// 初期値をカウンターみたく画面に表示したいけど、memoIndexでうまくpropsに渡ってない。
// カウンターで初期値をどう表示しとるか照らし合わせる。

const initialState = {
    data: [
        {  id: 1, title: "title1", memo: "memo1" },
        {  id: 2, title: "title2", memo: "memo2" },
        {  id: 3, title: "title3", memo: "memo3" },
        {  id: 4, title: "title4", memo: "memo4" },
    ],
    nextId: 5,
}

// stateとactionから新しいstateを作成してreturnで返す。
export default (state = initialState.data, action) => {
    switch(action.type) {
        case READ_MEMOS:
            return state
        case ADD_MEMO:
            // let nextId = 5
            // const insertData = {
            //     id : nextId++,
            //     title : action.params.title,
            //     memo : action.params.memo,
            // }
            // return [{ ...state, data : insertData}]; このやり方だと一つしかmemoを追加できない。

            // こんな感じにするとinitialStateにnextId(5から)を追加して、重複をなくすことができる。
            return [ ...state, {id : initialState.nextId++, title : action.params.title, memo : action.params.memo, }];
        default:
            return state
    }
}
// +++++++++++++++++++++++++
// state = initialState.dataにしとるからADD_MEMOのところで、id : initialState.nextId++,とinitialStateからアクセスしてしまっている。
// state = initialStateにして、state.nextIdで新しいidを更新できるようにしたい。


// import {
//     READ_MEMOS,
//     READ_MEMO,
//     ADD_MEMO,
//     UPDATE_MEMO,
//     DELETE_MEMO,
//   } from '../actions';
  
  //ユニークIDを生成する（ここは今回適当）
//   const getUniqueStr = () => {
//     return new Date().getTime().toString(16);
//   }
  
  //アクションに応じてStateの状態を決定する
//   export default (memos = initialState, action) => {
//     switch(action.type){
//         case READ_MEMOS:
//           return { title: memos.title };
//         case READ_MEMO:
//           return memos;
//         case ADD_MEMO:
//           const insertData = {
//             id : getUniqueStr(),
//             title : action.params.title,
//             memo : action.params.memo,
//           }
//           return { ...memos,[getUniqueStr()] : insertData};
//         case UPDATE_MEMO:
//           const updateData = {
//             id : action.id,
//             title : action.params.title,
//             memo : action.params.memo,   
//           }
//           return { ...memos,[updateData.id] : updateData};
//         case DELETE_MEMO:
//           delete memos[action.id];
//           return {...memos};
//         default:
//           return memos;
//       }
//   }




