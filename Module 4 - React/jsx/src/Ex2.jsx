function Ex2() {
  const getClassName = (temperature) => { 
    const className = temperature < 15 ? 'freezing' : temperature < 30 ? 'fair' : 'hell-scape';
    return className
  }

  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 2</h4>
      <div className="exercise" id="ex-2">
        <div id="weather-box" className={getClassName(10)}>Freezing</div>
        <div id="weather-box" className={getClassName(20)}>Fair</div>
        <div id="weather-box" className={getClassName(40)}>Hell</div>
      </div>
    </div>
  )
}

export default Ex2;
