import Study from '@/components/Study'
import StudyItem from '@/components/StudyItem'
import Image from 'next/image'
import React from 'react'
import { itemStudy, tinhnang } from '@/app/constant'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const page = () => {
  return (
    <main className='flex w-full flex-center flex-col gap-35 min-h-screen'>
      <section className='flex flex-col max-md:w-full max-w-screen-lg p-10 gap-6 md:gap-10'>
        
        <h1 className="text-center h1-normal font-light max-md:text-left max-md:leading-[60px]">
          <span>Khoá Học Làm </span>
          <span className=" bg-gradient-to-r from-blue-600 to-violet-600 text-white"> Website </span>
          <span className="font-extrabold"> Cấp Tốc Cho Người Mới <span className='max-md:hidden'>🚀</span> Bắt Đầu </span>
          <span className='hidden md:inline-flex'>🚀</span>
        </h1>

        <div className='p-5 md:mx-10 rounded-xl bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
          <p className='p-20-normal text-center text-white'>
            Với 70% khóa học hoàn toàn MIỄN PHÍ, đây là cơ hội tuyệt vời để tiếp cận kỹ năng lập trình web chuyên nghiệp của bạn. 30% khóa học còn lại sẽ cung thực chiến nâng cao dành cho những ai muốn trở thành chuyên gia web."
          </p>
        </div>

        <Study></Study>

      </section>

      <div className='flex flex-col max-md:w-full p-10 gap-6 md:gap-10 max-w-screen-md'>
        <h2 className='h2-normal text-center'>
          Công cụ phát triển <span className='h2-bold'>NEXTjs 14 Là gì?</span>
        </h2>
        <p className='text-center font-extralight text-[10px] leading-[30px] lg:text-[18px] mx-50'>
          Nextjs 14 là công cụ phát triển <span className='font-bold'>website tĩnh</span> được phát xây dựng bởi Vercel, <span className='font-bold'>nhanh hơn 53% thời gian khởi động</span> máy chủ cục bộ, nhanh hơn 94% thời gian cập nhật code với Fast Refresh, hỗ trợ xây dựng <span className='font-bold'>backend với SeverAction</span>.
        </p>

      </div>

      <Image
        src='/images/master.jpg'
        alt='master'
        width={1920}
        height={1080}
      ></Image>

      <div className='w-full flex-center flex-col -mt-4 md:-mt-10 bg-black-100 gap-20'>
        <div className='flex-center flex-col w-full p-10 md:p-20 gap-20'>

          <h2 className='flex-center text-center h2-bold text-white mt-20'>
            ĐỪNG LO, HOÀN TOÀN CÓ THỂ HỌC NẾU BẠN...
          </h2>

          <div className='flex max-md:flex-col gap-9'>
            <div className='bg-grey-100 rounded-md items-center flex gap-4 px-7 py-4'>

              <h2 className='text-center h2-bold bg-gradient-to-r from-blue-500 to-violet-400 bg-clip-text text-transparent'>Mới Bắt đầu tiếp cận</h2>

            </div>

            <div className='bg-grey-100 rounded-md items-center flex gap-4 px-7 py-4'>

              <h2 className='text-center h2-bold bg-gradient-to-r from-blue-500 to-violet-400 bg-clip-text text-transparent'>Có nền tảng về html/css</h2>

            </div>

            <div className='bg-grey-100 rounded-md items-center flex gap-4 px-7 py-4'>

              <h2 className='text-center h2-bold bg-gradient-to-r from-blue-500 to-violet-400 bg-clip-text text-transparent'>Tối ưu hoá hiệu suất</h2>

            </div>
          </div>

          <h2 className='flex-center text-center h2-bold bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent'>
            <Image src={'/images/checkmark.png'} width={60} height={60} alt='tick'></Image>
              KHOÁ HỌC NÀY PHÙ HỢP VỚI BẠN.
          </h2>

          <div className='flex-center relative group mt-4'>
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 to-blue-300 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Image src={'/images/dev4.jpg'} width={5500} height={3438} alt='v' className='relative object-contain'></Image>
          </div>


        </div>

        <div className='w-full flex flex-col gap-20 mt-20'>
          <span className='text-center h2-bold text-white items-center'>
            <span>BẠN SẼ ĐƯỢC HỌC NHỮNG GÌ TRONG</span> <span className='ml-1 mt-1 bg-gradient-to-r from-blue-600 to-violet-600 text-white'> WEBCUATOI.PRO?</span>
          </span>

          <div className='flex-center flex-col px-20 md:px-40 w-full mb-10 gap-40'>
            {
              itemStudy.map((it,index) => {
                return(
                  <StudyItem category={it.category} title={it.title} item={it.item} image={it.image} ind={it.ind}></StudyItem>
                )
              })
            }
          </div>
        </div>
      </div>

      <div className='flex flex-col w-full flex-center gap-20 mt-10'>
        <h2 className='h2-normal text-center'>
          Ưu đãi giá cả <span className='h2-bold'>Giúp bạn tiết kiệm chi phí</span>
        </h2>

        <div className='flex gap-4 w-[60%] flex-col md2:grid md2:grid-cols-3'>
          <div className='border border-1 border-slate-400 ring-slate-200 hover:ring-2'>
            <div className='p-4 flex flex-col gap-4'>
              <h3 className='font-bold text-[23px]'>Miễn Phí 70%</h3>
              <p className='font-extralight text-[16px]'>Chúng tôi sẽ chỉ thu phí nếu bạn tiếp cận được 70% và cảm thấy phù hợp và thanh toán</p>
              <span className='text-[14px] font-extralight'><span className='font-bold text-[15px]'>VNĐ</span><span className='font-bold text-[28px]'> 599,000</span>đ mãi mãi</span>
              <Button variant={'outline'} size={'lg'}>Học Ngay</Button>
            </div>
          </div>

          <div className='border border-1 border-pink-700 ring-rose-200 ring-2 hover:ring-3'>
            <div className='p-4 flex flex-col gap-4'>
              <h3 className='font-bold text-[23px]'>Tiết Kiệm</h3>
              <p className='font-extralight text-[16px]'>Bạn có thể mua trước khoá học và sẽ có một mức giá ưu đãi hơn cho bạn</p>
              <span className='text-[14px] font-extralight'><span className='font-bold text-[15px]'>VNĐ</span><span className='font-bold text-[28px] bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent'> 199,000</span>đ mãi mãi</span>
              <Button variant={'destructive'} size={'lg'} className='bg-black hover:text-blue-300 hover:bg-black'>Học Thử 🚀</Button>
              <span className='font-extralight text-[11px] text-center'>or <Link href={'/thanhtoan'}><span className='font-medium text-[12px]'>MUA NGAY ➙</span></Link></span>
            </div>
          </div>

          <div className='border border-1 border-violet-500 hover:ring-2 ring-green-100'>
            <div className='p-4 flex flex-col flex-between gap-4'>
              <h3 className='font-bold text-[23px]'>Hỗ Trợ</h3>
              <p className='font-extralight text-[16px]'>Chúng tôi sẽ hoàn lại 50% số tiền khoá học tri ân nếu bạn có sản phẩm đầu ra chất lượng</p>
              <span className='text-[14px] font-extralight'><span className='font-bold text-[15px] hover:text-blue-500'>Love</span><span className='font-bold text-[28px] bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent'>🫰</span></span>
              <Button disabled size={'lg'} >Xem Đầu ra</Button>
            </div>
          </div>

        </div>

        <div className='w-1/2 mt-20'>
          <h2 className='font-bold text-[30px] text-center'>
            Kết quả sau khoá học:
          </h2>
        </div>


        <div className='relative w-full h-full flex-center bg-black/10 flex-col'>
          <video preload="none" autoPlay loop muted className='w-full h-full object-cover absolute top-0 left-0 z-[-1]'>
            <source type='video/webm' src='/images/back.webm'></source>
          </video>
          <div className='w-full h-full md:w-[90%] max-md:order-2 flex md2:grid md:grid-cols-2 flex-col gap-10 p-10 mt-20 mb-16'>
            <div className='flex flex-col gap-7'>
                {tinhnang.map((tn) => {
                  return(
                    <div key={tn} className='bg-[#24292F] flex rounded-lg flex-col gap-10'>
                      <div className='p-4 text-white flex gap-3'>
                        <Image src={'/images/ch4.png'} width={30} height={30} alt='tick' className='object-contain'>

                        </Image>

                        <h2 className='font-medium text-[22px] text-center'>
                          {tn}
                        </h2>
                      </div>
                    </div>
                  )
                })}
          
            </div>

            <div className='flex w-full items-center'>
              <div className='p-3 md:p-8 flex flex-col gap-3 justify-start'>
                <h2 className='font-bold text-[40px] text-left text-white'>
                  Những tiện ích bạn sẽ được sự dụng trong khoá học
                </h2>
                <p className='font-medium text-[18px] text-slate-300'>Khoá học đây đủ và chi tiết nhất không quá tập trung vào quá sâu mà rèn luyện kĩ năng xây dựng ứng dụng trực tiếp thay vì quá nặng về lí thuyết chuyên sâu</p>
                <p className='font-medium text-[18px] text-slate-300'>Học trên nền tảng Pro với nhiều tính năng chuyên nghiệp như: ghi chú kiến thức cá nhân, chia sẻ code, so sánh code và nhiều tính năng Pro khác.</p>
                <p className='font-medium text-[18px] text-slate-300'>Đâu cần phải đắn đo lúc này, nhấp vào đây để bắt đầu học tập ngay hôm nay thồi nào!</p>
                <Button variant={'outline'} className='group mt-3 rounded-xl w-full md:w-1/2 p-7 text-[18px] transition duration-1000 hover:text-blue-500'>Trải Nghiệm Miễn Phí <span className='font-bold text-[25px] ml-3 group-hover:-rotate-45 transition duration-1000'>  ⇒</span></Button>
              </div>

            </div>
          </div>

          <div className='w-full flex-center mt-20 mb-10'>
            <div className='flex flex-col gap-7 w-full md:w-[80%] p-10'>
              <h1 className="text-center font-medium text-[71px] font-light max-md:text-left max-md:leading-[70px] text-white">
                <span>Đăng ký </span>
                <span className=" bg-gradient-to-r from-blue-500 to-violet-400 bg-clip-text text-transparent"> tư vấn lộ trình học </span>
                <span className="font-extrabold"> hoàn toàn miễn phí </span>
                <span className='hidden md:inline-flex'>🚀</span>
              </h1>
              <p className='text-[20px] font-extralight text-slate-400 text-center md:mx-20'>Bản thân mình sẽ liên hệ và giải đáp mọi thắc mắc của bạn về lộ trình học website cấp tốc để trở thành một nhà phát triển chuyên nghiệp. Để lại số thông tin phía dưới:</p>
              <div className='w-full flex-center'>
                <Button variant={'secondary'} className='p-7 w-full md:w-[30%] text-[20px]' size={'lg'}>Nhận tư vấn miễn phí</Button>
              </div>
            </div>
          </div>
        </div>

        <div className='w-[70%] md2:w-1/2 mt-10'>
          <h2 className='font-bold text-[30px] text-center'>
            Bạn có câu hỏi?
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Khoá miễn phí và tiết kiệm có khác gì nhau không?</AccordionTrigger>
              <AccordionContent>
                Không, đều có tất cả các tiện ích, tuy nhiên nếu chọn khoá tiết kiệm bạn sẽ nhận được ưu đãi ban đầu vô cùng lớn
                thay vì sẽ phải thanh toán một số tiền khá lớn sau khi xong 70% khoá học
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Có phải Webcuatoi.pro hướng đến fullstack?</AccordionTrigger>
              <AccordionContent>
                Đúng, khoá học tại Webcuatoi.pro sẽ hướng dẫn toàn bộ kiến thức đủ để bạn có thể xây dựng và triển khai một trang web đầy đủ chức năng và có thể đi thực tập.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Người mới bắt đầu tiếp cận có thể học không?</AccordionTrigger>
              <AccordionContent>
                Có, vì mục tiêu của khoá học này là sự dụng công cụ Nextjs 14, nên không cần phải hiểu quá sâu bản chất, không phải setup quá nhiều thứ nên chỉ cần chăm chỉ là có thể tiếp cận được
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </div>

    </main>
  )
}

export default page