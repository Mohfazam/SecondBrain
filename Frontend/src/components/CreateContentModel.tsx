export function CreateContentModel({ open, onClose }) {
    return <div>
        {open && <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">

            <div>
                <span className="bg-white opacity-100">
                    Yo?
                </span>
            </div>

        </div>}
    </div>
}