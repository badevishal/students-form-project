import StudentInfoModel from "../models/StudentInfo.js";

class studentInfoController {
  static home = (req, res) => {
    res.render("home");
  };

  static getData = async (req, res) => {
    try {
      const result = await StudentInfoModel.find().sort({ rollNo: 1 });
      const count = await StudentInfoModel.find().countDocuments();
      //   console.log(result);
      res.render("data", { Data: result, count });
    } catch (error) {
      console.log(error);
    }
  };

  static form = (req, res) => {
    res.render("form");
  };

  static createDoc = async (req, res) => {
    // console.log(req.body);
    try {
      // Creating Document.
      const Doc = new StudentInfoModel(req.body);
      // Saving Document.
      const result = await Doc.save();
      console.log(result);
      res.redirect("/data");
    } catch (error) {
      console.log(error);
    }
  };

  static edit = async (req, res) => {
    // console.log(req.params.id);
    try {
      const result = await StudentInfoModel.findById(req.params.id);
      console.log(result);
      res.render("edit", { result });
    } catch (error) {
      console.log(error);
    }
  };

  static update = async (req, res) => {
    // console.log(req.body);
    // console.log(req.params.id);
    try {
      const result = await StudentInfoModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      // console.log(result);
      res.redirect("/data");
    } catch (error) {
      console.log(error);
    }
  };

  static delete = async (req, res) => {
    // console.log(req.params.id);
    try {
      const result = await StudentInfoModel.findByIdAndDelete(req.params.id);
      // console.log(result);
      res.redirect("/data");
    } catch (error) {
      console.log(error);
    }
  };
}

export default studentInfoController;
