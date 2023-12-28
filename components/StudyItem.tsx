import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const StudyItem = ({category,title,item, image, ind}: {
    category: string,
    title: string,
    item: string[],
    image: string,
    ind: number
}) => {
    const test = ['Học cách sử dụng các thẻ HTML cơ bản', 'Sử dụng HTML một cách có ý nghĩa và ngữ cảnh','Bạn sẽ học cách kết hợp HTML với CSS và JavaScript']
  return (
    <div className='w-full max-lg:flex-col flex-between gap-4 lg:grid lg:grid-cols-2 max-lg:border max-lg:border-2 border-sky-500 rounded-lg max-lg:ring-offset-2 mdx-lg:ring-2'>
        <div className={`flex ${ind === 2 && "order-2"} flex-col gap-7 w-full p-3 text-white justify-start max-md:order-2`}>
            <p className='font-medium text-[10px] leading-[20px] lg:text-[12px] xl:text-[17px]'>
                <span className={`font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent ${ind === 2 && "bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent"}`}>{category} </span>
                 {title}
            </p>

            <div className='flex flex-col gap-5'>
                {item.map((tit) => {
                    return(
                        <div key={tit} className='flex gap-2 items-center'>
                            <Image
                                src={ind === 1 ? "/images/check2-nen.png" : "/images/check3-nen.png"}
                                width={20}
                                height={20}

                                alt='tick'
                            ></Image>
                            {tit}
                        </div>
                    )
                })}
            </div>

            <Button size={'lg'} variant="outline" className='text-black'>Khám Phá Ngay 🚀</Button>

        </div>
        <div className='w-full h-full'>
            <Image
                src={image}
                width={1480}
                height={774}
                alt='study'
                className='object-cover h-full rounded-md'
            ></Image>
        </div>
    </div>
  )
}

export default StudyItem