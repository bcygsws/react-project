import TimeFormat from "../utils/TimeFormat";

export default function Item({item, delItem, user}) {
	return (
		<div className="reply-item" key={item.rpid}>
			{/* 头像 */}
			<div className="root-reply-avatar">

				<div className="bili-avatar">
					<img
						className="bili-avatar-img"
						alt=""
						src={item.user.avatar}
					/>
				</div>
			</div>

			<div className="content-wrap">

				{/* 用户名 */}
				<div className="user-info">
					<div className="user-name">{item.user.uname}</div>
				</div>
				{/* 评论内容 */}
				<div className="root-reply">
					<span className="reply-content">{item.content}</span>
					<div className="reply-info">
						{/* 评论时间 */}
						<span className="reply-time">{TimeFormat(item.ctime)}</span>
						{/* 评论数量 */}
						<span className="reply-time">点赞数:{item.like}</span>
						{/*<span className="delete-btn" onClick={() => delItem(item)}>删除</span>*/}
						{user.uid === item.user.uid &&
							<span className="delete-btn" onClick={() => delItem(item)}>删除</span>}

					</div>
				</div>
			</div>

		</div>);
}