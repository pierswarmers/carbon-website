webpackJsonp([0x83c1f444884a],{650:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Principles"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Motion brings personality, tone, rhythm, and purpose to otherwise static objects. When used properly, UI motion should feel like a well choreographed dance, with all of the elements acting and reacting to one another in sync. Start with a clear objective, layering in movements that mimic reality and guide the user through an interface."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Purposeful"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Motion within an experience should be meaningful and intentional. It is used to establish hierarchy and draw the user’s attention to essential elements, giving them an understanding of an object’s role within the design. In order to convey this, the motion needs to be quick, direct, and precise."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Familiar"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Motion design should mirror movements we encounter in the physical world around us. Mimicking the expected behavior of objects from reality creates repetition and consistency, which enables users to anticipate what comes next. Providing motion feedback can help guide the user’s workflow, creating a clear path towards their end goal."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Unobtrusive"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Motion should be used with discretion—a little bit goes a long way. When applied properly, motion goes unnoticed. If a motion feels like it is calling attention to itself, tone it down! Subtlety ensures that the user won’t be distracted and allows for a cohesive motion experience across components."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Guidelines"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Duration"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Movement should be slow enough that the user can recognize what's happening, but fast enough that they are never waiting. The magnitude of change in an animation and its importance combine to determine its duration. Most animations in our component library last between 100 and 300 milliseconds."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{dataInsertComponent:"MotionExample",dataProps:"duration,300ms,600ms"},children:[]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Type"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Duration"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Buttons/small components"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"100-200ms"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Alerts/table reorder"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"250-300ms"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Panels/modals"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"300-400ms"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Page transitions"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"500-700ms"}]}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Easing"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Strictly linear movement appears strange to the human eye. An animation should accelerate and decelerate smoothly throughout its duration to appear as natural as possible."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{dataInsertComponent:"MotionExample",dataProps:"easing,Easing,No-Easing"},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"There are three specific easing curves: standard, ease-out, and ease-in."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:'You can think of “in” and “out” as referring to the side of the curve where more time will be spent. So an ease-out will slow down into it\'s final position. More time is dedicated to the end of the curve or the "out".'}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Standard:"}]},{type:"text",value:" cubic-bezier(0.5, 0, 0.1, 1)\nThe standard cubic-bezier is used for the majority of animations. Especially when extra context is needed or when an element is removed from the screen but easily accessible (i.e. slide out navigation panel). Acceleration and deceleration occur asymmetrically to feel natural. This means that more emphasis is placed on the end of the curve than at the beginning. In most cases, a user will need greater easing at the end of a movement to allow their eye to register the new state of the element."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{dataInsertComponent:"MotionExample",dataProps:"standard"},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Ease-out:"}]},{type:"text",value:" cubic-bezier(0, 0, 0.25, 1)\nThe ease-out cubic-bezier is used for adding elements to the stage or changing on-screen states at a users' input.\nEase-out is a much more dramatic curve because it is used for moving elements onto the stage. In which case, the object will slowly come to rest allowing the user to adjust to its arrival."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{dataInsertComponent:"MotionExample",dataProps:"ease-out"},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Ease-in:"}]},{type:"text",value:" cubic-bezier(0.25, 0, 1, 1)\nThe ease-in cubic-bezier is used primarily for removing elements from the screen or stage.\nEase-in does not need as much easing since it is primarily used for objects exiting the stage. Therefore, slow it slightly to allow the user to recognize that it is exiting before speeds out of view."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{dataInsertComponent:"MotionExample",dataProps:"ease-in"},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Properties"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The reality of the web is that "},{type:"element",tagName:"a",properties:{href:"https://csstriggers.com/",target:"blank"},children:[{type:"text",value:"some properties"}]},{type:"text",value:" are better to animate than others since some properties trigger more work for the browser than others. With a few exceptions, animations should be created by making changes to the transform and opacity properties."}]}],data:{quirksMode:!1}},fields:{slug:"/style/motion/motion",currentPage:"motion"},frontmatter:{title:"Motion",label:"Style",tabs:null}}},pathContext:{slug:"/style/motion/motion",currentPage:"motion"}}}});
//# sourceMappingURL=path---style-motion-49b6a58a8bae1c840be2.js.map