"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Project_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project_category.belongsTo(models.Project, { foreignKey: "project_id" });
      Project_category.belongsTo(models.Category, {
        foreignKey: "category_id",
      });
    }
  }
  Project_category.init(
    {
      project_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Project_category",
    }
  );
  return Project_category;
};
