import React from 'react'
import SSHResume from "@/content/ssh-resume.mdx"
import {Code} from "@/components/code"
import { Terminal, TerminalIcon, TerminalSquare } from 'lucide-react'
interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const SSHResumeCopyBlock = ({...props}: Props) => {
  return (
    <div className="w-full flex flex-col gap-2 border-t border-1 pt-8" {...props}>
        <p className='text-sm text-muted-foreground flex gap-3 items-center '><TerminalSquare size={18}/>  Access my profile using SSH</p>
        <div className=' py-2 rounded-xl'>

      <SSHResume components={{ Code}} />
        </div>
    </div>
  )
}

export default SSHResumeCopyBlock
