const User = ({ user }) => <><div className="card col-md-5">
    <img src={user.avatar_url} className="card-img-top" alt="image"></img>
    <div className="card-body">
        <h3 className="card-title">{user.login}</h3>
        Site Admin: <input type="checkbox" checked={user.site_admin} />
    </div>
    <div className="card-footer">
        <button className="btn btn-sm btn-success">
            Favorite &nbsp;
            <i className="fa fa-heart"></i>
        </button>
    </div>
</div>
    <br />
</>;

export default User;
