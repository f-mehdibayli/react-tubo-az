function Main({ data }) {

  return (
    <main className='min-h-[80vh]'>
      <section className="min-w-[1010px] bg-[#f1f3f7] border-t border-y-solid border-t-[#eaebf2] border-b-[#eaebf2] ">
        <div className="w-[1010px] m-auto px-[19px] py-[22px] font-[700] uppercase">
          Premium elanlar
        </div>
      </section>  
      <section className="bg-[#f6f7fa] py-[29px]">
        <div className="w-[1010px] m-auto flex flex-wrap gap-[17px] px-[19px]">
          {data.map((item, index) => (
            <article className="w-[229px] bg-[#fff] rounded-b-md" key={index}>
              <img className="w-[100%] h-[171px] object-cover rounded-t-md" src={item.images} alt={item.model} />
              <div className="pt-[11px] pr[10px] pl-[13px] pb-[14px]">
                <h2>
                  <strong>{item.price} {item.currency}</strong>
                </h2>
                <div>{item.brand} {item.model}</div>
                <div>{item.year}, {item.engine} L,{item.odometer} {item.odometerUnit}</div>
                <span className="text-[0.875rem] text-[#8d94ad]">{item.dates}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Main
