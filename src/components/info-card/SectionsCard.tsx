    interface sectionText {
    h2Title: string;
    h3Title: string;
    pTitle: string
    }

const SectionsCard: React.FC<sectionText> = ( { h2Title, h3Title, pTitle } ) => {
  return (
    <div>
        <h2 className="text-2xl text-cyan-800 font-semibold mb-4 h-9">
            {h2Title}
        </h2>
        <div className="flex-1 w-[600px] gap-5">
            <div className="bg-cyan-600 text-white p-6 rounded-lg shadow mx-3 ">
                <h3 className="text-xl font-semibold mb-2">
                   {h3Title}
                </h3>
                <p>
                    {pTitle}
                </p>
            </div>
        </div>
    </div>
  )
}

export default SectionsCard