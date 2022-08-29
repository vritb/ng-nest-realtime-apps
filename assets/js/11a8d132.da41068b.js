"use strict";(self.webpackChunkguide_generator=self.webpackChunkguide_generator||[]).push([[389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,u=d["".concat(l,".").concat(p)]||d[p]||m[p]||s;return n?o.createElement(u,i(i({ref:t},h),{},{components:n})):o.createElement(u,i({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var c=2;c<s;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const s={sidebar_position:3},i="Joining and Leaving Rooms",r={unversionedId:"lab2/JoiningAndLeavingRooms",id:"lab2/JoiningAndLeavingRooms",title:"Joining and Leaving Rooms",description:"In this lesson, we will take a look at how we can add multiple rooms in our chat",source:"@site/docs/lab2/JoiningAndLeavingRooms.md",sourceDirName:"lab2",slug:"/lab2/JoiningAndLeavingRooms",permalink:"/ng-nest-realtime-apps/lab2/JoiningAndLeavingRooms",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"demoSidebar",previous:{title:"Socket Connections",permalink:"/ng-nest-realtime-apps/lab2/SocketConnections"},next:{title:"Sending Messages",permalink:"/ng-nest-realtime-apps/lab2/Messages"}},l={},c=[{value:"Nest",id:"nest",level:2},{value:"ChatService",id:"chatservice",level:3},{value:"Add Interfaces",id:"add-interfaces",level:4},{value:"Store ChatRoom Data",id:"store-chatroom-data",level:4},{value:"Add Methods to Join and Leave Rooms",id:"add-methods-to-join-and-leave-rooms",level:4},{value:"Add Methods to Get Rooms",id:"add-methods-to-get-rooms",level:4},{value:"Remove User From Room Upon Disconnection",id:"remove-user-from-room-upon-disconnection",level:4},{value:"ChatGateway",id:"chatgateway",level:3},{value:"Pass Back a List of Rooms Upon identifying",id:"pass-back-a-list-of-rooms-upon-identifying",level:4},{value:"Add Handlers to Join and Leave Rooms",id:"add-handlers-to-join-and-leave-rooms",level:4},{value:"Broadcast Event When User Disconnects",id:"broadcast-event-when-user-disconnects",level:4},{value:"Angular",id:"angular",level:2},{value:"ChatService",id:"chatservice-1",level:3},{value:"Add Interfaces",id:"add-interfaces-1",level:4},{value:"Update ChatAppData Interface",id:"update-chatappdata-interface",level:4},{value:"Add New Observables",id:"add-new-observables",level:4},{value:"Return New Data to Component",id:"return-new-data-to-component",level:4},{value:"Get List of Rooms",id:"get-list-of-rooms",level:4},{value:"Add New Event Listeners",id:"add-new-event-listeners",level:4},{value:"Add Methods to Join and Leave Rooms",id:"add-methods-to-join-and-leave-rooms-1",level:4},{value:"Join Room Upon Connection",id:"join-room-upon-connection",level:4},{value:"Leave Room Upon Disconnection",id:"leave-room-upon-disconnection",level:4},{value:"AppComponent",id:"appcomponent",level:3},{value:"Add Method to Switch Rooms",id:"add-method-to-switch-rooms",level:4},{value:"AppComponent Template",id:"appcomponent-template",level:3},{value:"Update Rooms Lists",id:"update-rooms-lists",level:4},{value:"Update Users Lists",id:"update-users-lists",level:4},{value:"Update Welcome Section with Real Room Name",id:"update-welcome-section-with-real-room-name",level:4}],h={toc:c};function m(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"joining-and-leaving-rooms"},"Joining and Leaving Rooms"),(0,a.kt)("p",null,"In this lesson, we will take a look at how we can add multiple rooms in our chat\napp, each with their own set of users and messages."),(0,a.kt)("h2",{id:"nest"},"Nest"),(0,a.kt)("p",null,"On the server-side, we need to store the list of current rooms and let the\nclients join and leave rooms."),(0,a.kt)("h3",{id:"chatservice"},"ChatService"),(0,a.kt)("h4",{id:"add-interfaces"},"Add Interfaces"),(0,a.kt)("p",null,"To kick it off, we need a couple of data structures. We'll create ",(0,a.kt)("inlineCode",{parentName:"p"},"ChatService"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"Message")," interfaces. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Message")," will represent a single chat message\nand have the ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"content")," of the message as values.\n",(0,a.kt)("inlineCode",{parentName:"p"},"ChatRoom")," will hold the ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," and messages currently in a chat room."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./server/src/chat/chat.service.ts",title:"./server/src/chat/chat.service.ts"},"export interface Message {\n  user: string;\n  content: string;\n}\n\nexport interface ChatRoom {\n  users: string[];\n  messages: Message[];\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We could put these interfaces in their file, but I choose to keep them in\nthe service for simplicity.")),(0,a.kt)("h4",{id:"store-chatroom-data"},"Store ChatRoom Data"),(0,a.kt)("p",null,"We'll use a JavaScript object to store the chat room data. The key will be the\nchat room's name, and the value will be a ",(0,a.kt)("inlineCode",{parentName:"p"},"ChatRoom"),". Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"chatRooms"),"\nvariable directly below the ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./server/src/chat/chat.service.ts",title:"./server/src/chat/chat.service.ts"},"export class ChatService {\n  users: Record<string, string> = {};\n  //highlight-start\n  chatRooms: Record<string, ChatRoom> = {\n    General: { users: [], messages: [] },\n    Angular: { users: [], messages: [] },\n    NestJS: { users: [], messages: [] },\n  };\n  //highlight-end\n\n  //omitted for brevity\n}\n")),(0,a.kt)("h4",{id:"add-methods-to-join-and-leave-rooms"},"Add Methods to Join and Leave Rooms"),(0,a.kt)("p",null,"Next, we'll add several methods to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ChatService")," class. These methods will\ncontrol users joining and leaving rooms by modifying the ",(0,a.kt)("inlineCode",{parentName:"p"},"chatRooms")," ",(0,a.kt)("inlineCode",{parentName:"p"},"users"),"\narray."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./server/src/chat/chat.service.ts",title:"./server/src/chat/chat.service.ts"},"joinRoom(room: string, user: string) {\n  this.chatRooms[room].users.push(user);\n  // sort the users alphabetically\n  this.chatRooms[room].users.sort((a, b) => {\n    return a.toLowerCase() >= b.toLowerCase() ? 1 : -1;\n  });\n}\n\nleaveRoom(room: string, user: string) {\n  this.chatRooms[room].users = this.chatRooms[room].users.filter(\n    (u) => u !== user,\n  );\n}\n")),(0,a.kt)("h4",{id:"add-methods-to-get-rooms"},"Add Methods to Get Rooms"),(0,a.kt)("p",null,"Next, we'll add a couple of methods that the gateway will need to pull back an\nindividual chat room as well as a list of all the available rooms:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./server/src/chat/chat.service.ts",title:"./server/src/chat/chat.service.ts"},"getChatRoom(room: string) {\n  return this.chatRooms[room];\n}\n\ngetChatRooms() {\n  const keys = Object.keys(this.chatRooms);\n  return keys;\n}\n")),(0,a.kt)("h4",{id:"remove-user-from-room-upon-disconnection"},"Remove User From Room Upon Disconnection"),(0,a.kt)("p",null,"The last thing we need to update here in the service is to remove a user from a\nchat room when they disconnect. Update the ",(0,a.kt)("inlineCode",{parentName:"p"},"disconnect")," method with the\nfollowing highlighted lines:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"disconnect(clientId: string) {\n  const users = Object.keys(this.users);\n  let userToRemove = '';\n  users.forEach((user) => {\n    if (this.users[user] === clientId) {\n      userToRemove = user;\n      return;\n    }\n  });\n  if (userToRemove) {\n    delete this.users[userToRemove];\n    //highlight-start\n    // remove user from any joined rooms\n    const rooms = Object.keys(this.chatRooms);\n    rooms.forEach((room) => {\n      this.leaveRoom(room, userToRemove);\n    });\n    //highlight-end\n  }\n  return userToRemove;\n}\n")),(0,a.kt)("p",null,"In the snippet above, we loop through each of the rooms and remove the user if\nneeded."),(0,a.kt)("h3",{id:"chatgateway"},"ChatGateway"),(0,a.kt)("h4",{id:"pass-back-a-list-of-rooms-upon-identifying"},"Pass Back a List of Rooms Upon identifying"),(0,a.kt)("p",null,"After the client identifies, that's a good time to give them any information they\nneed. In our case, they will need a list of all the possible rooms. In the\n",(0,a.kt)("inlineCode",{parentName:"p"},"handleIdentify")," method, return the rooms:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./server/src/chat.gateway.ts",title:"./server/src/chat.gateway.ts"},"@SubscribeMessage('identify')\nasync handleIdentify(client: Socket, user: string) {\n  this.chatService.identify(user, client.id);\n  //highlight-next-line\n  return this.chatService.getChatRooms();\n}\n")),(0,a.kt)("h4",{id:"add-handlers-to-join-and-leave-rooms"},"Add Handlers to Join and Leave Rooms"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"handleJoinRoom")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"handleLeaveRoom")," are events the client will raise as\nthey move between rooms client side:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./server/src/chat.gateway.ts",title:"./server/src/chat.gateway.ts"},"@SubscribeMessage('joinRoom')\nhandleJoinRoom(client: Socket, data: { user: string; room: string }) {\n  this.chatService.joinRoom(data.room, data.user);\n  client.join(data.room);\n  client.to(data.room).emit('userJoined', data.user);\n  return this.chatService.getChatRoom(data.room);\n}\n\n@SubscribeMessage('leaveRoom')\nhandleLeaveRoom(client: Socket, data: { user: string; room: string }) {\n  this.chatService.leaveRoom(data.room, data.user);\n  client.leave(data.room);\n  client.to(data.room).emit('userLeft', data.user);\n}\n")),(0,a.kt)("p",null,"Here we are using a few new APIs we haven't seen yet."),(0,a.kt)("p",null,"Socket.IO has the concept of ",(0,a.kt)("a",{parentName:"p",href:"https://socket.io/docs/v4/rooms/"},"rooms")," that\nclients can join. Rooms are used to broadcast events to a subset of clients.\nWe'll use rooms to send messages to particular chat rooms."),(0,a.kt)("p",null,"To join a client into a room, you use ",(0,a.kt)("inlineCode",{parentName:"p"},"client.join")," and pass in the room's name. Events can be sent to that room by specifying the room name in the ",(0,a.kt)("inlineCode",{parentName:"p"},"to"),"\nmethod before emitting the event like so:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"client.to(data.room).emit('userJoined', data.user);")),(0,a.kt)("p",null,"For more info, see the Socket.IO docs on\n",(0,a.kt)("a",{parentName:"p",href:"https://socket.io/docs/v4/rooms/#joining-and-leaving"},"Joining and Leaving"),"\nrooms."),(0,a.kt)("h4",{id:"broadcast-event-when-user-disconnects"},"Broadcast Event When User Disconnects"),(0,a.kt)("p",null,"When a user disconnects, we'll broadcast an event that they left the room.\nUpdate the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleDisconnect")," method to emit a ",(0,a.kt)("inlineCode",{parentName:"p"},"userLeft")," event and pass in the\nuser name returned from disconnecting the client in the service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./server/src/chat.gateway.ts",title:"./server/src/chat.gateway.ts"},"@SubscribeMessage('disconnect')\nasync handleDisconnect(client: Socket) {\n  //highlight-start\n  const user = this.chatService.disconnect(client.id);\n  client.broadcast.emit('userLeft', user);\n  //highlight-end\n}\n")),(0,a.kt)("h2",{id:"angular"},"Angular"),(0,a.kt)("p",null,"On the client, the user will join and leave rooms using the UI to navigate\naround."),(0,a.kt)("h3",{id:"chatservice-1"},"ChatService"),(0,a.kt)("h4",{id:"add-interfaces-1"},"Add Interfaces"),(0,a.kt)("p",null,"We'll duplicate the ",(0,a.kt)("inlineCode",{parentName:"p"},"Message")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ChatRoom")," interfaces on the server.\nAdd them to the top of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ChatService"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/chat.service.ts",title:"./client/src/app/chat.service.ts"},"export interface Message {\n  user: string;\n  content: string;\n}\n\nexport interface ChatRoom {\n  users: string[];\n  messages: Message[];\n}\n")),(0,a.kt)("h4",{id:"update-chatappdata-interface"},"Update ChatAppData Interface"),(0,a.kt)("p",null,"Now add some additional members to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ChatAppData")," interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/chat.service.ts",title:"./client/src/app/chat.service.ts"},"export interface ChatAppData {\n  //highlight-next-line\n  activeRoom: string;\n  //highlight-next-line\n  chatRoom: ChatRoom;\n  connected: boolean;\n  //highlight-next-line\n  rooms: string[];\n  user: string;\n}\n")),(0,a.kt)("p",null,"Here, ",(0,a.kt)("inlineCode",{parentName:"p"},"activeRoom")," will be the name of the room the user is currently in,\n",(0,a.kt)("inlineCode",{parentName:"p"},"chatRoom")," will contain the ",(0,a.kt)("inlineCode",{parentName:"p"},"ChatRoom")," data, and ",(0,a.kt)("inlineCode",{parentName:"p"},"rooms")," will be a list of all\nthe available rooms."),(0,a.kt)("h4",{id:"add-new-observables"},"Add New Observables"),(0,a.kt)("p",null,"Add some new observables to store the state of the new values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/chat.service.ts",title:"./client/src/app/chat.service.ts"},"export class ChatService {\n  private url = 'http://localhost:3000/chat';\n  private client: Socket;\n  private connected$ = new BehaviorSubject(false);\n  private user$ = new BehaviorSubject('');\n  //highlight-start\n  private activeRoom$ = new BehaviorSubject('General');\n  private chatRoom$ = new BehaviorSubject<ChatRoom>({\n    users: [],\n    messages: [],\n  });\n  private rooms$ = new BehaviorSubject<string[]>([]);\n  //highlight-end\n\n  //omitted for brevity\n}\n")),(0,a.kt)("h4",{id:"return-new-data-to-component"},"Return New Data to Component"),(0,a.kt)("p",null,"Update ",(0,a.kt)("inlineCode",{parentName:"p"},"getChatAppData")," to include new members:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/chat.service.ts",title:"./client/src/app/chat.service.ts"},"getChatAppData(): Observable<ChatAppData> {\n  const data = combineLatest([\n    //highlight-next-line\n    this.activeRoom$,\n    //highlight-next-line\n    this.chatRoom$,\n    this.connected$,\n    //highlight-next-line\n    this.rooms$,\n    this.user$,\n  ]).pipe(\n    map((value) => {\n      //highlight-next-line\n      const [activeRoom, chatRoom, connected, rooms, user] = value;\n      return {\n        //highlight-next-line\n        activeRoom,\n        //highlight-next-line\n        chatRoom,\n        connected,\n        //highlight-next-line\n        rooms,\n        user,\n      };\n    })\n  );\n  return data;\n}\n")),(0,a.kt)("h4",{id:"get-list-of-rooms"},"Get List of Rooms"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"identify")," event now returns the list of rooms when called. Add a\ncallback to the method to store the rooms in the observable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/chat.service.ts",title:"./client/src/app/chat.service.ts"},"this.client.on('connect', () => {\n  //highlight-start\n  this.client.emit('identify', this.user$.value, (rooms: string[]) => {\n    this.rooms$.next(rooms);\n  });\n  //highlight-end\n  this.connected$.next(true);\n});\n")),(0,a.kt)("h4",{id:"add-new-event-listeners"},"Add New Event Listeners"),(0,a.kt)("p",null,"The server will broadcast new ",(0,a.kt)("inlineCode",{parentName:"p"},"userJoined")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"userLeft")," events for other\nusers. Add these new event handlers after the existing ones inside the\n",(0,a.kt)("inlineCode",{parentName:"p"},"ChatService")," constructor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/chat.service.ts",title:"./client/src/app/chat.service.ts"},"this.client.on('userJoined', (user: string) => {\n  const chatRoom = this.chatRoom$.value;\n  if (chatRoom) {\n    chatRoom.users.push(user);\n    // Sort the users alphabetically\n    chatRoom.users.sort((a, b) => {\n      return a.toLowerCase() >= b.toLowerCase() ? 1 : -1;\n    });\n    this.chatRoom$.next(chatRoom);\n  }\n});\nthis.client.on('userLeft', (user: string) => {\n  const chatRoom = this.chatRoom$.value;\n  if (chatRoom) {\n    chatRoom.users = chatRoom.users.filter((u) => u !== user);\n    this.chatRoom$.next(chatRoom);\n  }\n});\n")),(0,a.kt)("h4",{id:"add-methods-to-join-and-leave-rooms-1"},"Add Methods to Join and Leave Rooms"),(0,a.kt)("p",null,"Add methods to send events to the server when the current user joins and\nleaves rooms. The ",(0,a.kt)("inlineCode",{parentName:"p"},"switchRoom")," method will be called from the app component and\nhave the user leave their current room, then join the new room. The\n",(0,a.kt)("inlineCode",{parentName:"p"},"activeRoom$")," observable is used to retrieve the current room to leave and then\nset to the new room once done."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/chat.service.ts",title:"./client/src/app/chat.service.ts"},"private joinRoom(room: string) {\n  this.client.emit(\n    'joinRoom',\n    { user: this.user$.value, room },\n    (chatRoom: ChatRoom) => {\n      this.chatRoom$.next(chatRoom);\n    }\n  );\n}\n\nprivate leaveRoom(room: string) {\n  this.client.emit('leaveRoom', { user: this.user$.value, room });\n}\n\nswitchRoom(room: string) {\n  const activeRoom = this.activeRoom$.value;\n  this.leaveRoom(activeRoom);\n  this.joinRoom(room);\n  this.activeRoom$.next(room);\n}\n")),(0,a.kt)("h4",{id:"join-room-upon-connection"},"Join Room Upon Connection"),(0,a.kt)("p",null,"When the user connects, they will join their current active room. Update the\nconnect method to call ",(0,a.kt)("inlineCode",{parentName:"p"},"joinRoom"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/chat.service.ts",title:"./client/src/app/chat.service.ts"},"connect(user: string) {\n  if (this.client.connected) {\n    return;\n  }\n  localStorage.setItem('user', user);\n  this.user$.next(user);\n  this.client.connect();\n  //highlight-next-line\n  this.joinRoom(this.activeRoom$.value);\n}\n")),(0,a.kt)("h4",{id:"leave-room-upon-disconnection"},"Leave Room Upon Disconnection"),(0,a.kt)("p",null,"When the user disconnects by using the disconnect button, we will have them\nleave their current room. Update the ",(0,a.kt)("inlineCode",{parentName:"p"},"disconnect")," method to call ",(0,a.kt)("inlineCode",{parentName:"p"},"leaveRoom"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/chat.service.ts",title:"./client/src/app/chat.service.ts"},"disconnect() {\n  localStorage.removeItem('user');\n  //highlight-next-line\n  this.leaveRoom(this.activeRoom$.value);\n  this.client.disconnect();\n  this.user$.next('');\n}\n")),(0,a.kt)("h3",{id:"appcomponent"},"AppComponent"),(0,a.kt)("h4",{id:"add-method-to-switch-rooms"},"Add Method to Switch Rooms"),(0,a.kt)("p",null,"In the app component, add the ",(0,a.kt)("inlineCode",{parentName:"p"},"switchRoom")," method, which will call into the\n",(0,a.kt)("inlineCode",{parentName:"p"},"ChatService"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./client/src/app/app.component.ts",title:"./client/src/app/app.component.ts"},"switchRoom(room: string) {\n  this.chatService.switchRoom(room);\n}\n")),(0,a.kt)("h3",{id:"appcomponent-template"},"AppComponent Template"),(0,a.kt)("h4",{id:"update-rooms-lists"},"Update Rooms Lists"),(0,a.kt)("p",null,"Around line 7 in the template, switch out the hard-coded list of rooms with one\nthat will now display the real list:"),(0,a.kt)("p",null,"Replace:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"title=./client/src/app/app.component.html",title:"./client/src/app/app.component.html"},'<ul>\n  <li class="active">General</li>\n</ul>\n')),(0,a.kt)("p",null,"With:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"title=./client/src/app/app.component.html",title:"./client/src/app/app.component.html"},'<ul>\n  <li\n    [ngClass]="{ active: data.activeRoom === room }"\n    (click)="switchRoom(room)"\n    *ngFor="let room of data.rooms"\n  >\n    {{ room }}\n  </li>\n</ul>\n')),(0,a.kt)("p",null,"We add an 'active' CSS class to the currently active room to indicate the room\nthe user is currently in."),(0,a.kt)("h4",{id:"update-users-lists"},"Update Users Lists"),(0,a.kt)("p",null,"Around line 20, update the users list to use real data:"),(0,a.kt)("p",null,"Replace:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"title=./client/src/app/app.component.html",title:"./client/src/app/app.component.html"},"<ul>\n  <li>User</li>\n</ul>\n")),(0,a.kt)("p",null,"With:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"title=./client/src/app/app.component.html",title:"./client/src/app/app.component.html"},'<ul>\n  <li *ngFor="let user of data.chatRoom.users">{{ user }}</li>\n</ul>\n')),(0,a.kt)("h4",{id:"update-welcome-section-with-real-room-name"},"Update Welcome Section with Real Room Name"),(0,a.kt)("p",null,"Around line 30, update the welcome message to display the name of the active\nroom:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"title=./client/src/app/app.component.html",title:"./client/src/app/app.component.html"},'<div class="user">Welcome {{ user }}, Room {{ data.activeRoom }}</div>\n')),(0,a.kt)("p",null,"Visit the app and see that you can now join rooms and, if you open another\nbrowser (must be a different browser vendor like FireFox, Edge, etc.. so the\nlocal storage values don't get mixed up), you can see the users list update in\nrealtime:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Rooms and Users",src:n(4613).Z,width:"612",height:"691"})),(0,a.kt)("p",null,"Next up, sending and receiving messages!"))}m.isMDXComponent=!0},4613:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/rooms-and-users-bcf9657a7e50450299e3482bbdf7d227.jpg"}}]);