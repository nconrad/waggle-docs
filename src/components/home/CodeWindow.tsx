import React from 'react'
import styled from 'styled-components'

import Highlight, { defaultProps } from "prism-react-renderer"


type Props = {
  title: string
  code?: string
  showUrlBar?: boolean
  src?: string
  language?: 'python' | 'json' | 'bash'
}

export default function CodeWindow(props: Props) {
  const {
    title,
    code,
    src,
    showUrlBar,
    language = 'python'
  } = props

  return (
    <Root>
      <div className="code-window shadow-2xl text-[.9em]">
        <div className="bg-gray-200 dark:bg-gray-800 flex flex-row justify-start items-center p-2 rounded-t-md gap-2">
          <div className="flex flex-row left-2 top-2">
            <div className="bg-red-500 h-3 mr-2 rounded-full w-3"></div>
            <div className="bg-yellow-500 h-3 mr-2 rounded-full w-3"></div>
            <div className="bg-green-500 h-3 rounded-full w-3"></div>
          </div>
          {!showUrlBar &&
            <div className="lg:ml-0 md:ml-5 ml-0 justify-center text-gray-500 text-xs">{title}</div>
          }
          {showUrlBar &&
            <div className="flex grow bg-slate-100 p-1 px-4 rounded-xl lg:ml-0 md:ml-5 ml-0 text-gray-500 text-xs">
              {title}
            </div>
          }
          {showUrlBar &&
            <div className="flex flex-col">
              <div className="w-[18px] h-[3px] my-[1px] bg-[#aaa]"></div>
              <div className="w-[18px] h-[3px] my-[1px] bg-[#aaa]"></div>
              <div className="w-[18px] h-[3px] my-[1px] bg-[#aaa]"></div>
            </div>
          }
        </div>
        {code &&
          <Highlight {...defaultProps} language={language} code={code}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        }
        {src &&
          <div className="rounded-b-xl">
            <img src={src} />
          </div>
        }
      </div>
    </Root>
  )
}

/*
background-color: #aaa;
    display: block;
    height: 3px;
    margin: 3px 0;
    width: 17px;
    */

const Root = styled.div`
  .code-window {
    .prism-code {
      border-radius: 0px 0px 0.75rem 0.75rem;
    }
  }
`
