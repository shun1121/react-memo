import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMemos } from '../actions'
import _ from 'lodash'
import { Link } from 'react-router-dom'

class MemoIndex extends Component {

  componentDidMount() {
    // このmemoIndexコンポーネントの中のmapStateToPropsで({ Data: state })と定めたことで、
    // createStoreのstateの中にある、combineReducerで結び付けられたMemoとformにDataを指定してアクセスできる。
      console.log(this.props)
    // {history: {…}, location: {…}, match: {…}, staticContext: undefined, Data: {…}, …}
    // Data: {Memo: Array(4), form: {…}}
    // getMemos: ƒ ()...}
      console.log(this.props.Data)　// stateの中身
      console.log(this.props.Data.Memo)
      this.props.getMemos()
  }
  // const memos = this.props.memos;
  // return _.map(memos, memo =>(

  renderData() {
    const data = this.props.Data.Memo
    return _.map(data, d => (
      <tr key={d.id}>
        {/*   ↓ 遷移先のurlを/show/:idにするには、idを動的に変更しないといけない。
    　　　　   だから、${d.id}と設定する。　*/}
        <td>
          <Link to={`/show/${d.id}`} >
            {d.id}
          </Link>
        </td>
        <td>{d.title}</td>
        <td>{d.memo}</td>
      </tr>
    ))
  }

  render() {   
    return (
      <div className="memoIndex" style={{ marginLeft: 30, marginTop: 30}}>
        <table>
          <thead>
            <tr>
              <th>id </th>
              <th>title</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderData()}
            {/* <tr>
              <td>{this.props.id}</td>
              <td>{this.props.title}</td>
              <td>{this.props.memo}</td>
            </tr> */}
          </tbody>
        </table>
        <Link to="/new">New memo</Link>
      </div>
    );
  }
}

// Memo: Array(4)
// 0: {id: 1, title: "title1", memo: "memo1"}
// 1: {id: 2, title: "title2", memo: "memo2"}
// 2: {id: 3, title: "title3", memo: "memo3"}
// 3: {id: 4, title: "title4", memo: "memo4"}
// length: 4
// __proto__: Array(0)
// form: {}
// 上のオブジェクトが返ってくる。

const mapStateToProps = state => ({ Data: state })
// ここでstate.dataを設定する必要がある。

// 前は下のように設定していてうまくいかなかった。
// const mapStateToProps = state => ({
//   id: state.Memo.id,
//   title: state.Memo.title,
//   memo: state.Memo.memo
// })

const mapDispatchToProps = ({ getMemos })

export default connect(mapStateToProps, mapDispatchToProps)(MemoIndex);

