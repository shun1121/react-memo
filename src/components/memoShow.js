import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

class MemoShow extends Component {
  componentDidMount() {
    //   const stateId = this.props.state.Memo
    //   const theId = this.props.match.params.id
    //   for (let i = 0; i < stateId.length; i++) {
    //     if (theId == stateId[i].id) {
    //       console.log(stateId[i].title)
    //       console.log(stateId[i].memo)
    //     }
    //   }
    //   console.log(_.map(stateId, id => id.id))
    //   console.log(this.props.match.params.id)


  }
    // Fieldで入力される値をrenderFieldの引数にしている。　labelなら<Field label="title">のtitleが渡ってくる。
  renderField({ input, type, label, meta: { touched, error }}) {
    return (
      <div>
          <input {...input} placeholder={label} type={type} />
          { touched && error && <span>{error}</span>}
      </div>
    )
  } 

  render() {
    let style = { 
        padT: { paddingTop: 10},
        padL: { paddingLeft: 5},
    }
    return (
      <React.Fragment>
        {/* {console.log(this.props.state.Memo)} */}
        <form style={style.padL}>
          <div style={style.padT}>
            <Field label="title" name="title" type="text" component={this.renderField} />
          </div>
          <div>
            <Field label="memo" name="memo" type="text" component={this.renderField} />
          </div>
          <div style={style.padR}>
            <input type="submit" value="Create" />
            <Link to="/" style={style.padL} >Back</Link>
          </div>
        </form>
        <p>aaaaaaaaaaaaaaaaaa</p>
      </React.Fragment>
    );
  }
}

const validate = values => {
    const errors = {}
    
    if (!values.title) errors.title = "fill in this area"

    return errors
}

const mapStateToProps = (state, ownProps) => { 
    //console.log(ownProps) // ↓
    // match:
      // isExact: true
      // params: {id: "2"}  <<<<***************
      // path: "/show/:id"
      // url: "/show/2"
      // __proto__: Object
      // staticContext: undefined

    //console.log(state.Memo[0]) // ↓
    // {Memo: Array(4), form: {…}}Memo: (4) [{…}, {…}, {…}, {…}]form: {memoNewForm: {…}}__proto__: Object

    // ↓　memoContentで、表示したいidを持ったメモのレコード（オブジェクト）を取得。
    const memoContent = state.Memo[ownProps.match.params.id-1]
    // enableReinitializeをセットで設定する。renderされた時に初期化され、目当てのメモを表示しておくため。
    return { initialValues: memoContent } 
}

// const mapDispatchToProps = ({ getMemo })


export default connect(mapStateToProps, null)(
    reduxForm({ validate, form: 'memoNewForm', enableReinitialize: true })(MemoShow)
);

















