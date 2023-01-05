function getValue(){
    let strProps = []
    for (const [key, value] of Object.entries(this)) {
      if (typeof value != "function"){
        strProps.push(`${key}: ${value}`)
      }
  }
      console.log(`Значения свойств объекта props (${strProps.join(', ')})`);
  }
  getValue = getValue.bind(props)