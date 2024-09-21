interface headerText {
    titleText: string;
    paragraphText: string;
}
const HeaderCard: React.FC<headerText> = ( { titleText, paragraphText } ) => {
 
return (
    <div>
        <div className="text-center">
            <h1 className="text-4xl text-cyan-800 font-bold mb-4">
                {titleText}
            </h1>
        </div>
        <p className="text-cyan-600">
            {paragraphText}
        </p>
    </div>

  )
}

export default HeaderCard