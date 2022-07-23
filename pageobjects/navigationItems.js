module.exports = class NavigationItem {
  constructor(name, count, subMenuItems = []) {
    this.name = name;
    this.count = count;
    this.subMenuItems = subMenuItems;
  }
}
