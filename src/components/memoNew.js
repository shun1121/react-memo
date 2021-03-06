import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { addMemo } from '../actions' //actionsからimportする。

class MemoNew extends Component {

  // Fieldで入力される値をrenderFieldの引数にしている。　labelなら<Field label="title">のtitleが渡ってくる。
  
  renderField({ input, type, label, meta: { touched, error }}) { 
    let style = {
        color: "red"
    }
    return (
      <div>
          <input {...input} placeholder={label} type={type} /> 
          { touched && error && <span style={style}>{error}</span>}
      </div>
    )
  } 

  onSubmit = (values) => {
      console.log(this.props)
      this.props.addMemo(values)
      this.props.history.push("/")
  }

  render() {
    let style = { 
        padT: { paddingTop: 10 },
        padL: { paddingLeft: 5 },
    }

    const {handleSubmit} = this.props
    console.log(this.props)
    console.log(this.props.invalid)

    return (
      // onSubmitでcreateボタンを押したら、記入した内容を追加できるようにする。 
      <React.Fragment>
        <form onSubmit={handleSubmit(this.onSubmit)} style={style.padL}>
          <div style={style.padT}>
            <Field label="title" name="title" type="text" component={this.renderField} />
          </div>
          <div>
            <Field label="memo" name="memo" type="text" component={this.renderField} />
          </div>
          <div style={style.padR}>
          <input type="submit" value="Create" disabled={ this.props.pristine || this.props.invalid } />
            {/* <input type="submit" value="Create" disabled={ !this.props.title || !this.props.memo } /> */}
            <Link to="/" style={style.padL} >Back</Link>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

const validate = values => {
    const errors = {}
    if (!values.title) errors.title = "fill in this area"
    if (!values.memo) errors.memo = "type something in this field"
    return errors
}

// ↓ これいらない
// const mapStateToProps = state => ({
//     id: state.Memo.id,
//     title: state.Memo.title,
//     memo: state.Memo.memo
// })

const mapDispatchToProps =  ({ addMemo })

// decorate with redux-form
// validateなしでも動く。
export default connect(null, mapDispatchToProps)(
    reduxForm({ validate, form: 'memoNewForm' })(MemoNew)
);









