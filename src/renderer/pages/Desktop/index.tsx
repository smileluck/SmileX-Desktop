
import style from './style.module.css'
import moment from 'moment';
export default function Desktop() {
    document.title = 'SmileX-Desktop'
    const nowTime = moment();
    return (
        <>
            <div className={style.desktop}>
                <div className={style.desktopWrapper}>
                    <div className='w-1/5 text-center text-2xl mx-auto px-2 py-2'>
                        SmileX-Desktop
                    </div>
                    <div className='w-1/5 text-center text-2xl mx-auto px-2 py-2'>
                        <span>{nowTime.format()}</span>
                    </div>
                    <div className="w-4/5 box-border container mx-auto px-2 py-2 grid grid-cols-6">
                        <div className="w-28 h-28 p-2 bg-white mx-1 my-1 rounded-md bg-opacity-75">12</div>
                        <div className="w-28 h-28 p-2 bg-white mx-1 my-1 rounded-md bg-opacity-75">12</div>
                        <div className="w-28 h-28 p-2 bg-white mx-1 my-1 rounded-md bg-opacity-75">12</div>
                        <div className="w-28 h-28 p-2 bg-white mx-1 my-1 rounded-md bg-opacity-75">12</div>
                        <div className="w-28 h-28 p-2 bg-white mx-1 my-1 rounded-md bg-opacity-75">12</div>
                        <div className="w-28 h-28 p-2 bg-white mx-1 my-1 rounded-md bg-opacity-75">12</div>
                        <div className="w-28 h-28 p-2 bg-white mx-1 my-1 rounded-md bg-opacity-75">12</div>
                        <div className="w-28 h-28 p-2 bg-white mx-1 my-1 rounded-md bg-opacity-75">12</div>
                        <div className="w-28 h-28 p-2 bg-white mx-1 my-1 rounded-md bg-opacity-75">12</div>
                        <div className="w-28 h-28 p-2 bg-white mx-1 my-1 rounded-md bg-opacity-75">12</div>
                        <div className="w-28 h-28 p-2 bg-white mx-1 my-1 rounded-md bg-opacity-75">12</div>
                        <div className="w-28 h-28 p-2 bg-white mx-1 my-1 rounded-md bg-opacity-75">12</div>
                        <div className="w-28 h-28 p-2 bg-white mx-1 my-1 rounded-md bg-opacity-75">12</div>
                        <div className="w-28 h-28 p-2 bg-white mx-1 my-1 rounded-md bg-opacity-75">12</div>
                        <div className="w-28 h-28 p-2 bg-white mx-1 my-1 rounded-md bg-opacity-75">12</div>
                    </div>
                </div>
            </div>
        </>
    )
}