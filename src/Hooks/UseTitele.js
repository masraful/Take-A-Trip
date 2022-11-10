import { useEffect } from "react"


const useTitle = title => {
    useEffect(() => {
        document.title = ` ${title}/Take-A-Trip`;
    }, [title])
}
export default useTitle;