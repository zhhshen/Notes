import * as d3 from "d3"
const Viz = require('viz.js')
const digraph = `digraph {
	node [shape="plaintext"];
	root [label=<
		<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
			<tr>
				<td colspan="3">root</td>
			</tr>
			<tr>
			<td colspan="2">fields</td><td>where</td></tr>
			<tr>
				<td colspan="2">
					<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
						<tr>
							<td>user_id</td>
							<td>backend_user_maidian.user_id</td>
						</tr>
						<tr>
							<td>person_id</td>
							<td>COALESCE(., '')</td>
						</tr>
						<tr>
							<td>doctor_id</td>
							<td>COALESCE(., '')</td>
						</tr>
						<tr>
							<td>username</td>
							<td>COALESCE(., '')</td>
						</tr>
						<tr>
							<td>first_name</td>
							<td>COALESCE(., '')</td>
						</tr>
						<tr>
							<td>last_name</td>
							<td>COALESCE(., '')</td>
						</tr>
						<tr>
							<td>is_staff</td>
							<td>COALESCE(., '')</td>
						</tr>
						<tr>
							<td>points</td>
							<td>COALESCE(., 0)</td>
						</tr>
						<tr>
							<td>is_puppet</td>
							<td>COALESCE(., '')</td>
						</tr>
						<tr>
							<td>membership_level</td>
							<td>COALESCE(., '')</td>
						</tr>
						<tr>
							<td>phone</td>
							<td>COALESCE(., '')</td>
						</tr>
						<tr>
							<td>cl_list</td>
							<td>COALESCE(., ARRAY))</td>
						</tr>
						<tr>
							<td>use_duration</td>
							<td>COALESCE(., 0)</td>
						</tr>
						<tr>
							<td>open_times</td>
							<td>COALESCE(., 0)</td>
						</tr>
						<tr>
							<td>channel_list</td>
							<td>COALESCE(., ARRAY))</td>
						</tr>
						<tr>
							<td>city_list</td>
							<td>COALESCE(., ARRAY))</td>
						</tr>
						<tr>
							<td>app_version_list</td>
							<td>COALESCE(., ARRAY))</td>
						</tr>
						<tr>
							<td>first_visit_time</td>
							<td>COALESCE(., '')</td>
						</tr>
						<tr>
							<td>date_joined</td>
							<td>COALESCE(., '')</td>
						</tr>
						<tr>
							<td>user_rights_level</td>
							<td>COALESCE(., '')</td>
						</tr>
					</table>
				</td>
				<td>
				</td>
			</tr>
		</table>>];

	backend_user_maidian [label=<
		<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
			<tr>
				<td colspan="3">backend_user_maidian</td>
			</tr>
			<tr>
			<td colspan="2">fields</td><td>where</td></tr>
			<tr>
				<td colspan="2">
					<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
						<tr>
							<td>user_id</td>
							<td>backend_user.user_id</td>
						</tr>
						<tr>
							<td>cl_list</td>
							<td>IF(&gt;, ., .)</td>
						</tr>
						<tr>
							<td>channel_list</td>
							<td>IF(&gt;, ., .)</td>
						</tr>
						<tr>
							<td>city_list</td>
							<td>IF(&gt;, ., .)</td>
						</tr>
						<tr>
							<td>app_version_list</td>
							<td>IF(&gt;, ., .)</td>
						</tr>
						<tr>
							<td>first_visit_time</td>
							<td>backend_user.first_visit_time</td>
						</tr>
						<tr>
							<td>date_joined</td>
							<td>backend_user.date_joined</td>
						</tr>
						<tr>
							<td>open_times</td>
							<td>maidian.open_times</td>
						</tr>
						<tr>
							<td>duration</td>
							<td>maidian.duration</td>
						</tr>
					</table>
				</td>
				<td>
				</td>
			</tr>
		</table>>];

	backend_user [label=<
		<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
			<tr>
				<td colspan="3">backend_user</td>
			</tr>
			<tr>
			<td colspan="2">fields</td><td>where</td></tr>
			<tr>
				<td colspan="2">
					<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
						<tr>
							<td>user_id</td>
							<td>IF(ISNULL(.), ., .)</td>
						</tr>
						<tr>
							<td>cl_list</td>
							<td>backend.cl_list</td>
						</tr>
						<tr>
							<td>channel_list</td>
							<td>backend.channel_list</td>
						</tr>
						<tr>
							<td>city_list</td>
							<td>backend.city_list</td>
						</tr>
						<tr>
							<td>app_version_list</td>
							<td>backend.app_version_list</td>
						</tr>
						<tr>
							<td>first_visit_time</td>
							<td>FROM_UNIXTIME(., "yyyy-MM-dd HH:mm:ss")</td>
						</tr>
						<tr>
							<td>date_joined</td>
							<td>created_user.date_joined</td>
						</tr>
					</table>
				</td>
				<td>
				</td>
			</tr>
		</table>>];

	backend [label=<
		<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
			<tr>
				<td colspan="3">backend</td>
			</tr>
			<tr>
			<td colspan="2">fields</td><td>where</td></tr>
			<tr>
				<td colspan="2">
					<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
						<tr>
							<td>user_id</td>
							<td>user_id</td>
						</tr>
						<tr>
							<td>cl_list</td>
							<td>remove_null(COLLECT_SET(WHEN(RLIKE, WHEN(=, cl_idfv, cl_id), '')))</td>
						</tr>
						<tr>
							<td>channel_list</td>
							<td>remove_null(COLLECT_SET(LOWER(channel)))</td>
						</tr>
						<tr>
							<td>city_list</td>
							<td>remove_null(COLLECT_SET(LOWER(city_id)))</td>
						</tr>
						<tr>
							<td>app_version_list</td>
							<td>remove_null(COLLECT_SET(LOWER(app_version)))</td>
						</tr>
						<tr>
							<td>first_visit_time</td>
							<td>MIN(time_stamp)</td>
						</tr>
					</table>
				</td>
				<td>
					<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
						<tr>
							<td>[and]</td>
						</tr>
						<tr>
							<td>partition_date</td>
						</tr>
						<tr>
							<td>user_id!=''</td>
						</tr>
						<tr>
							<td>user_id!=0</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>>];

	tl_hdfs_backend_view [label=<
		<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
			<tr>
				<td colspan="3">tl_hdfs_backend_view</td>
			</tr>
			<tr>
			<td colspan="2">fields</td><td>where</td></tr>
			<tr>
				<td colspan="2">
				</td>
				<td>
				</td>
			</tr>
		</table>>];

	created_user [label=<
		<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
			<tr>
				<td colspan="3">created_user</td>
			</tr>
			<tr>
			<td colspan="2">fields</td><td>where</td></tr>
			<tr>
				<td colspan="2">
					<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
						<tr>
							<td>id</td>
							<td>id</td>
						</tr>
						<tr>
							<td>date_joined</td>
							<td>date_joined</td>
						</tr>
					</table>
				</td>
				<td>
					<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
						<tr>
							<td>[and]</td>
						</tr>
						<tr>
							<td>partition_date''</td>
						</tr>
						<tr>
							<td>from_unixtime(unix_timestamp(date_joined, "yyyy-MM-dd HH:mm:ss"), "yyyMMdd")''</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>>];

	tl_hdfs_user_view [label=<
		<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
			<tr>
				<td colspan="3">tl_hdfs_user_view</td>
			</tr>
			<tr>
			<td colspan="2">fields</td><td>where</td></tr>
			<tr>
				<td colspan="2">
				</td>
				<td>
				</td>
			</tr>
		</table>>];

	maidian [label=<
		<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
			<tr>
				<td colspan="3">maidian</td>
			</tr>
			<tr>
			<td colspan="2">fields</td><td>where</td></tr>
			<tr>
				<td colspan="2">
					<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
						<tr>
							<td>user_id</td>
							<td>user_id</td>
						</tr>
						<tr>
							<td>open_times</td>
							<td>SUM(IF(=, 1, 0))</td>
						</tr>
						<tr>
							<td>duration</td>
							<td>SUM(IF(AND, TOK_DOUBLE([), 0))</td>
						</tr>
						<tr>
							<td>cl_list</td>
							<td>remove_null(COLLECT_SET(WHEN(RLIKE, WHEN(=, cl_idfv, cl_id), '')))</td>
						</tr>
						<tr>
							<td>channel_list</td>
							<td>remove_null(COLLECT_SET(LOWER(channel)))</td>
						</tr>
						<tr>
							<td>city_list</td>
							<td>remove_null(COLLECT_SET(LOWER(city_id)))</td>
						</tr>
						<tr>
							<td>app_version_list</td>
							<td>remove_null(COLLECT_SET(LOWER(app_version)))</td>
						</tr>
					</table>
				</td>
				<td>
					<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
						<tr>
							<td>[and]</td>
						</tr>
						<tr>
							<td>partition_date''</td>
						</tr>
						<tr>
							<td>user_id!=''</td>
						</tr>
						<tr>
							<td>user_id!=0</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>>];

	tl_hdfs_maidian_view [label=<
		<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
			<tr>
				<td colspan="3">tl_hdfs_maidian_view</td>
			</tr>
			<tr>
			<td colspan="2">fields</td><td>where</td></tr>
			<tr>
				<td colspan="2">
				</td>
				<td>
				</td>
			</tr>
		</table>>];

	db_table [label=<
		<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
			<tr>
				<td colspan="3">db_table</td>
			</tr>
			<tr>
			<td colspan="2">fields</td><td>where</td></tr>
			<tr>
				<td colspan="2">
					<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
						<tr>
							<td>user_id</td>
							<td>tl_user.id</td>
						</tr>
						<tr>
							<td>person_id</td>
							<td>COALESCE(., '')</td>
						</tr>
						<tr>
							<td>doctor_id</td>
							<td>COALESCE(., '')</td>
						</tr>
						<tr>
							<td>username</td>
							<td>COALESCE(., '')</td>
						</tr>
						<tr>
							<td>first_name</td>
							<td>COALESCE(., '')</td>
						</tr>
						<tr>
							<td>last_name</td>
							<td>COALESCE(., '')</td>
						</tr>
						<tr>
							<td>is_staff</td>
							<td>COALESCE(., '')</td>
						</tr>
						<tr>
							<td>points</td>
							<td>COALESCE(., 0)</td>
						</tr>
						<tr>
							<td>is_puppet</td>
							<td>COALESCE(., '')</td>
						</tr>
						<tr>
							<td>menbership_level</td>
							<td>COALESCE(., '')</td>
						</tr>
						<tr>
							<td>phone</td>
							<td>COALESCE(., '')</td>
						</tr>
						<tr>
							<td>user_rights_level</td>
							<td>COALESCE(., '')</td>
						</tr>
					</table>
				</td>
				<td>
				</td>
			</tr>
		</table>>];

	tl_user [label=<
		<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
			<tr>
				<td colspan="3">tl_user</td>
			</tr>
			<tr>
			<td colspan="2">fields</td><td>where</td></tr>
			<tr>
				<td colspan="2">
					<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
						<tr>
							<td>id</td>
							<td>id</td>
						</tr>
						<tr>
							<td>username</td>
							<td>username</td>
						</tr>
						<tr>
							<td>first_name</td>
							<td>first_name</td>
						</tr>
						<tr>
							<td>last_name</td>
							<td>last_name</td>
						</tr>
						<tr>
							<td>is_staff</td>
							<td>is_staff</td>
						</tr>
					</table>
				</td>
				<td>
					<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
						<tr>
							<td>[ ]</td>
						</tr>
						<tr>
							<td>partition_date''</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>>];

	tl_hdfs_user_view [label=<
		<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
			<tr>
				<td colspan="3">tl_hdfs_user_view</td>
			</tr>
			<tr>
			<td colspan="2">fields</td><td>where</td></tr>
			<tr>
				<td colspan="2">
				</td>
				<td>
				</td>
			</tr>
		</table>>];

	tl_person [label=<
		<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
			<tr>
				<td colspan="3">tl_person</td>
			</tr>
			<tr>
			<td colspan="2">fields</td><td>where</td></tr>
			<tr>
				<td colspan="2">
					<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
						<tr>
							<td>user_id</td>
							<td>user_id</td>
						</tr>
						<tr>
							<td>points</td>
							<td>points</td>
						</tr>
						<tr>
							<td>is_puppet</td>
							<td>is_puppet</td>
						</tr>
						<tr>
							<td>id</td>
							<td>id</td>
						</tr>
					</table>
				</td>
				<td>
					<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
						<tr>
							<td>[ ]</td>
						</tr>
						<tr>
							<td>partition_date''</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>>];

	tl_hdfs_person_view [label=<
		<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
			<tr>
				<td colspan="3">tl_hdfs_person_view</td>
			</tr>
			<tr>
			<td colspan="2">fields</td><td>where</td></tr>
			<tr>
				<td colspan="2">
				</td>
				<td>
				</td>
			</tr>
		</table>>];

	tl_userextra [label=<
		<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
			<tr>
				<td colspan="3">tl_userextra</td>
			</tr>
			<tr>
			<td colspan="2">fields</td><td>where</td></tr>
			<tr>
				<td colspan="2">
					<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
						<tr>
							<td>user_id</td>
							<td>user_id</td>
						</tr>
						<tr>
							<td>membership_level</td>
							<td>membership_level</td>
						</tr>
						<tr>
							<td>phone</td>
							<td>phone</td>
						</tr>
						<tr>
							<td>user_rights_level</td>
							<td>user_rights_level</td>
						</tr>
					</table>
				</td>
				<td>
					<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
						<tr>
							<td>[ ]</td>
						</tr>
						<tr>
							<td>partition_date''</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>>];

	tl_hdfs_userextra_view [label=<
		<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
			<tr>
				<td colspan="3">tl_hdfs_userextra_view</td>
			</tr>
			<tr>
			<td colspan="2">fields</td><td>where</td></tr>
			<tr>
				<td colspan="2">
				</td>
				<td>
				</td>
			</tr>
		</table>>];

	tl_doctor [label=<
		<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
			<tr>
				<td colspan="3">tl_doctor</td>
			</tr>
			<tr>
			<td colspan="2">fields</td><td>where</td></tr>
			<tr>
				<td colspan="2">
					<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
						<tr>
							<td>user_id</td>
							<td>user_id</td>
						</tr>
						<tr>
							<td>id</td>
							<td>id</td>
						</tr>
					</table>
				</td>
				<td>
					<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
						<tr>
							<td>[ ]</td>
						</tr>
						<tr>
							<td>partition_date''</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>>];

	tl_hdfs_doctor_view [label=<
		<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
			<tr>
				<td colspan="3">tl_hdfs_doctor_view</td>
			</tr>
			<tr>
			<td colspan="2">fields</td><td>where</td></tr>
			<tr>
				<td colspan="2">
				</td>
				<td>
				</td>
			</tr>
		</table>>];
	backend_user_maidian_join_db_table_join_ [label=<
		<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
			<tr><td>LEFTOUTERJOIN</td></tr>
			<tr><td>backend_user_maidian.user_id=db_table.user_id</td></tr>
		</table>
	>];
	root->backend_user_maidian_join_db_table_join_;
	backend_user_maidian_join_db_table_join_->backend_user_maidian;
	backend_user_maidian_join_db_table_join_->db_table;
	backend_user_join_maidian_join_ [label=<
		<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
			<tr><td>LEFTOUTERJOIN</td></tr>
			<tr><td>backend_user.user_id=maidian.user_id</td></tr>
		</table>
	>];
	backend_user_maidian->backend_user_join_maidian_join_;
	backend_user_join_maidian_join_->backend_user;
	backend_user_join_maidian_join_->maidian;
	backend_join_created_user_join_ [label=<
		<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
			<tr><td>backend.user_id=created_user.id</td></tr>
			<tr><td>FULLOUTERJOIN</td></tr>
		</table>
	>];
	backend_user->backend_join_created_user_join_;
	backend_join_created_user_join_->backend;
	backend_join_created_user_join_->created_user;
	backend->tl_hdfs_backend_view;
	created_user->tl_hdfs_user_view;
	maidian->tl_hdfs_maidian_view;
	tl_user_join_tl_person_join_tl_userextra_join_tl_doctor_join_ [label=<
		<table BORDER="0" CELLBORDER="1" CELLSPACING="0">
			<tr><td>LEFTOUTERJOIN</td></tr>
			<tr><td>tl_user.id=tl_doctor.user_id</td></tr>
			<tr><td>tl_user.id=tl_person.user_id</td></tr>
			<tr><td>tl_user.id=tl_userextra.user_id</td></tr>
		</table>
	>];
	db_table->tl_user_join_tl_person_join_tl_userextra_join_tl_doctor_join_;
	tl_user_join_tl_person_join_tl_userextra_join_tl_doctor_join_->tl_user;
	tl_user_join_tl_person_join_tl_userextra_join_tl_doctor_join_->tl_person;
	tl_user_join_tl_person_join_tl_userextra_join_tl_doctor_join_->tl_userextra;
	tl_user_join_tl_person_join_tl_userextra_join_tl_doctor_join_->tl_doctor;
	tl_user->tl_hdfs_user_view;
	tl_person->tl_hdfs_person_view;
	tl_userextra->tl_hdfs_userextra_view;
	tl_doctor->tl_hdfs_doctor_view;
}`
var result = Viz(digraph, { format: "png-image-element" })
document.body.appendChild(result)
const isImgLoaded = function (url) {
	return new Promise((resolve, reject) => {
		let img = new Image()
		img.src = url
		if (img.complete) {
			resolve(img)
		}
		img.onload = function () {
			resolve(img)
		}
		img.onerror = function () {
			reject(img)
		}
	})
}
window.onload =function () {
	let url = d3.select('img').attr('src')
	isImgLoaded(url).then((res) => {
		let zoom = d3.zoom().scaleExtent([1, 8]).on("zoom", redraw)
		let svg = d3.select('.viz-main').append('svg')
  		.attr('width', 960)
  		.attr('height', 800)
  		.call(zoom)
		let zoomer = svg.append('svg:image')
			.attr('xlink:href', url)
			.attr('width', 960)
			.on('click', stopped, true)
		d3.select('img').style('display', 'none')
		function reset () {
			svg.transition()
				.duration(750).call(zoom.transform, d3.zoomIdentity)
		}
		function redraw () {
			zoomer.style('transform', "translate(" + d3.event.transform.x + "px, " + d3.event.transform.y + "px) scale(" + d3.event.transform.k + ")")
		}
		function stopped() {
			if (d3.event.defaultPrevented) d3.event.stopPropagation();
		}
	})
}
