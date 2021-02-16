# Title

> A 2.0-Vue.js project
vue/cli 2.0 버전과 라우터및 웹팩 기능을 사용한 vue 차트예제 입니다.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

## description
 vue 공식문서를 참조하여 적용중인 라우터 입니다. 
 향후 하드코딩되어있는 첫번째 프로젝트를 현재 스터디중인 vue로 작업진행할 예정입니다.
##
to be continue....
Fall in thought
	@RequestMapping(value={"/ubhome/bbs/bbsSettingWriteProc.do", "/{loginStr}/ubhome/bbs/bbsSettingWriteProc.do"})
	public String writeProc(HttpServletRequest request, HttpServletResponse response, ModelMap model) throws BaseException {
		model.addAttribute("authW", PageRequest.getParameterWithJoined(request, "authW", ","));
		model.addAttribute("authR", PageRequest.getParameterWithJoined(request, "authR", ","));
		model.addAttribute("authD", PageRequest.getParameterWithJoined(request, "authD", ","));

		model.addAttribute("authReplyW", PageRequest.getParameterWithJoined(request, "authReplyW", ","));
		model.addAttribute("authReplyR", PageRequest.getParameterWithJoined(request, "authReplyR", ","));
		model.addAttribute("authReplyD", PageRequest.getParameterWithJoined(request, "authReplyD", ","));
		System.out.println("debug")
		model.addAttribute("authCommentW", PageRequest.getParameterWithJoined(request, "authCommentW", ","));
		model.addAttribute("authCommentR", PageRequest.getParameterWithJoined(request, "authCommentR", ","));
		model.addAttribute("authCommentD", PageRequest.getParameterWithJoined(request, "authCommentD", ","));

		model.addAttribute("authCommentReplyW", PageRequest.getParameterWithJoined(request, "authCommentReplyW", ","));
		model.addAttribute("authCommentReplyR", PageRequest.getParameterWithJoined(request, "authCommentReplyR", ","));
		model.addAttribute("authCommentReplyD", PageRequest.getParameterWithJoined(request, "authCommentReplyD", ","));

		model.addAttribute("remarkTop", StringUtil.convertRemark(PageRequest.getParameter(request, "remarkTop")));
		model.addAttribute("remarkBottom", StringUtil.convertRemark(PageRequest.getParameter(request, "remarkBottom")));

		super.writeProc(request, response, model);
		
		int page = PageRequest.getParameter(request, "page", 1);
		int bsIdx = PageRequest.getParameter(request, "bsIdx", 0);
		if (bsIdx > 0) {
			setMoveUrl("/ubhome/bbs/bbsAdd.do?bsIdx=" + bsIdx + "&page=" + page);
		} else {
			setMoveUrl("/ubhome/bbs/bbsList.do?page=" + page);
		}

		return getViewPage();
	}
