
import style from './style.module.css'
export default function Desktop() {
    return (
        <>
            <div className={style.desktop}>
                <div className={style.desktopWrapper}>
                    {/* <div className='w-1/5 mx-auto px-2 py-2'>
                        <div className=''></div>
                    </div> */}
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