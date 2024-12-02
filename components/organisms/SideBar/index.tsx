import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./profile";

export default function SideBar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="icon-menu-overview" active />
          <MenuItem title="Transaction" icon="icon-menu-transaction" />
          <MenuItem title="Messages" icon="icon-menu-messages" />
          <MenuItem title="Card" icon="icon-menu-card" />
          <MenuItem title="Reward" icon="icon-menu-rewards" />
          <MenuItem title="Setting" icon="icon-menu-settings" />
          <MenuItem title="Log Out" icon="icon-menu-logout" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
