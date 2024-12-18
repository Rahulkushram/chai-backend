// this is a first approch and also the production grade code

const asyncHandler = (requestHandler)=>{
    (req, res, next) => {
        Promise.resolve(requestHandler(res, req, next)).
        catch((err) => next(err))
    }
}

export {asyncHandler}


// const asyncHandler = () => {}
// const asyncHandler = (func) => ()=> {}
// const asyncHandler = (func) => async ()=> {}        


// in below there is a higher order function and also is a 2nd approach to handle the asynchandler using try and catch
// const asyncHandler = (fn)=> async(req, res, next) =>{
//       try{
//            await fn(req, res , next)
//       } catch(error){
//           res.status(error.code || 500).json({
//             success : false,
//             message : error.message
//           })
//       }
// }